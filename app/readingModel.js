const mongoose = require('mongoose');
// var bcrypt = require('bcrypt');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true}, function(err) {
  if(err) {
    console.log('ERROR connecting. ' + err);
  } else {
    console.log ('Succeeded, connected');
  }
});

var readingSchema = mongoose.Schema({
  temperature: {type: Number, required: true},
  humidity: {type: Number, required: true},
  co2: {type: Number, required: false},
  timestamp: {type: Date, required: true, default: Date.now},
});

var reading = mongoose.model('reading', readingSchema);

module.exports = reading;