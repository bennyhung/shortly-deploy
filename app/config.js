var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shortly');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));

db.once('open', function() {
  console.log('Mongo DB connection is open!');
});

module.exports = db;