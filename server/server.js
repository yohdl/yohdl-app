
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./user/userController');
const cookieController = require('./utils/cookieController');
const chat = require('./chat/chatController');
const redis = require('redis');
const Nohm = require('nohm').Nohm;

var redisClient = redis.createClient();

Nohm.setPrefix('yohdl');
Nohm.setClient(redisClient);

// const oppressor = require('oppressor');


//parsing the body and adding to the req
app.use(bodyParser.urlencoded({ extended: true }));
//handling cookies for all requests
app.use(cookieParser());
// app.use(cookieParser(), cookieController.setCookie);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/index.html'));
});
app.get('/yohdl', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/yohdl/index.html'));
});

//serving main.js
app.get('/bundle.js', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/yohdl/bundle.js'));
});
app.get('/events.js', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/yohdl/events.js'));
});

//logging the user in
app.post('/login', userController.verifyUser);


//socket.io
io.on('connection', function(socket) {
    console.log('connected')
    //id = req.params.id 
    //user object contrl.getuser()
    socket.emit('userObj', {});
  }
) 

server.listen(8080);  


