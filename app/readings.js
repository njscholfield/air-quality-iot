const Reading = require('./readingModel.js');

exports.getAllReadings = (req, res) => {
    Reading.find({}, (err, results) => {
        if(err) return res.status(500).json({err: err})
        return res.json(results);
    });
}

exports.queryReadings = (req, res) => {
    let query = {}

    if(req.query.start) {
        const startTime = new Date(req.query.start);
        query.timestamp = { $gte: startTime };
    }

    if(req.query.end) {
        const endTime = new Date(req.query.end);
        if(query.timestamp) {
            query.timestamp['$lt'] = endTime;
        } else {
            query.timestamp = { $lt: endTime };
        }
    }

    if(req.query.temperature) {
        query.temperature = req.query.temperature;
    }
    if(req.query.humidity) {
        query.humidity = req.query.humidity;
    }
    if(req.query.co2) {
        query.co2 = req.query.co2;
    }

    console.log(query);
    Reading.find(query, (err, results) => {
        if(err) return res.status(400).json({err: err})
        return res.json(results);
    })
}

exports.addNewReading = (req, res) => {
    const newReading = Reading({
        temperature: req.body.temperature,
        humidity: req.body.humidity,
        co2: req.body.co2,
    });
    newReading.save();
    res.json({success: true});
}