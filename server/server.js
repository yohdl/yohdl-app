var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userController = require('./user/userController');
const chatController = require('./chat/chatController');
const fileController = require('./files/fileController');
const cookieController = require('./utils/cookieController');
const chat = require('./chat/chatController');
const redis = require('redis');
const Nohm = require('nohm').Nohm;
const client = redis.createClient();

// client.select(0);
client.on('connect', () => {
  console.log('connected to redis');
  Nohm.setClient(client);
  Nohm.setPrefix('yohdl');
  userController.findAllUsers();
});
// client.on('connect', () => {
//   console.log('connected to redis');
//   Nohm.setClient(client);
//   Nohm.setPrefix('yohdl');
//   userController.createUser({
//     name: "Jose",
//     email: "joseeeee@jmail.com",
//     password: "password1",
//     chats: JSON.stringify(['someid']),
//     gravatarEmail: "some shit goes here"  
//   })
// client.select(0);
// client.on('connect', () => {
//   console.log('connected to redis');
//   Nohm.setClient(client);
//   Nohm.setPrefix('yohdl');
//   fileController.createFile({
//     createdAt: 111111,
//     filePath: 'clips/1234',
//     author: JSON.stringify({ id: 123, name: 'Jose' })
//   });
// });
// client.on('connect', () => {
//   console.log('connected to redis');
//   Nohm.setClient(client);
//   Nohm.setPrefix('yohdl');
//   chatController.createChat({
//     createdAt: 111111,
//     files: JSON.stringify(['123', '233','2423']),
//     users: JSON.stringify([{ id: 'someid', name: 'somename', email: 'email' }]),
//     name: 'superdopechat'
//   });
// });







// const oppressor = require('oppressor');


//parsing the body and adding to the req
app.use(bodyParser.urlencoded({ extended: true }));
//handling cookies for all requests
app.use(cookieParser());
// app.use(cookieParser(), cookieController.setCookie);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/index.html'));
});
app.get('/yohdl', function (req, res) {
  
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


