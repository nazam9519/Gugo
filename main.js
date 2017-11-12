var express = require('express'),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
port = process.env.PORT || 3000;

const request = require('request-promise');

//needed to read json from req body
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// mongoose connection string wih options to ensure warning messages won't display
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://rnb:1234@198.100.45.203:27017/test_db',  {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

app.use(require('./controllers/mainController.js'))


app.listen(port, function(){
    console.log('running on Port: '+ port);
});