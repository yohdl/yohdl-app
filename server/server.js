
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./server/user/userController');
const cookieController = require('./server/utils/cookieController');
const chat = require('./server/chat/chatController');
// const oppressor = require('oppressor');


//parsing the body and adding to the req
app.use(bodyParser.urlencoded({ extended: true }));
//handling cookies for all requests
app.use(cookieParser(), cookieController.setCookie);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/yohdl/test.html'));
});

//serving main.js
app.get('/main.js', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/yohdl/main.js'));
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


