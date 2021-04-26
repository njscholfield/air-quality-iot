require('dotenv').config();
const express = require('express');
const reading = require('./app/readings.js');

const app = express();

app.set('port', process.env.PORT || 8000);
app.use(express.json());
app.use(express.static('dist'));

app.get('/readings/all', reading.getAllReadings);

app.get('/readings/query', reading.queryReadings);

app.post('/readings', reading.addNewReading);

app.listen(app.get('port'), function() {
  console.log('Node app listening on port ' + app.get('port'));
});