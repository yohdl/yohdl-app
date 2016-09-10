var app = require('express')();
const express = require('express');
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
const concat = require('concat-stream');
const cookie = require('cookie');
let curClip;



client.on('connect', () => {
  console.log('connected to redis');
  Nohm.setClient(client);
  Nohm.setPrefix('yohdl');
});

app.use(express.static('client'));
app.use('/yohdl', express.static('yohdl'));



// binary parser

app.use((req,res,next) => {
  req.pipe(concat((data) => {
    req.body = data;
    next();
  }))
});



// const oppressor = require('oppressor');



//use a different body parser for binary

//parsing the body and adding to the req
// app.use(bodyParser.urlencoded({ extended: true }));
//handling cookies for all requests
app.use(cookieParser());
// app.use(cookieParser(), cookieController.setCookie);


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './../client/index.html'));
});
app.get('/yohdl', function (req, res) {
  
  res.sendFile(path.join(__dirname, './../client/yohdl/index.html'));
});



app.post('/clip', (req, res) => {
  console.log('body', req.body);
  var data = req.body;
  
  // var fileId = req.cookie.id;
  
  fileController.createFile({createdAt: 1111, author: 11}).then((filepath) => {

    curClip = filePath;
    
    fs.writeFile(__dirname + '/../client/yohdl/' + filePath, data, (err) => {
      if (err) {
        throw err;
      } else  {
        console.log('file created');
        io.emit('newClip', curClip);
      }
    });
  })
  // let buf = new Buffer.(req.body.toString('binary'),'binary');
  res.send('ok');
})

//serving main.js
// app.get('/bundle.js', function(req, res) {
//   res.sendFile(path.join(__dirname, './../client/yohdl/bundle.js'));
// });
// app.get('/events.js', function(req, res) {
//   res.sendFile(path.join(__dirname, './../client/yohdl/events.js'));
// });
// app.get('/main.js', function(req, res) {
// 	res.sendFile(path.join(__dirname, './../client/main.js'));
// });
// app.get('/install.js', function(req, res) {
// 	res.sendFile(path.join(__dirname, './../client/install.js'));
// });
// app.get('/main.css', function(req, res) {
//   res.sendFile(path.join(__dirname, './../client/yohdl/main.css'));
// });

//logging the user in
app.post('/login', userController.verifyUser);

let globalSocket;
//socket.io
io.on('connection', function (socket) {
  globalSocket = socket;
  console.log('connected')
  socket.on('clip', () => { 
    console.log('inclip listener')
    // console.log('curClip in ')
    setTimeout(() => {
      socket.emit('newClip', curClip);
    }, 5000);
    
   });
    // console.log(cookie.parse(socket.handshake.headers['cookie']));
    //id = req.params.id 
    //user object contrl.getuser()
    // userController.getUser().then((data) => {socket.emit('userObj', data);});
    // console.log(cookie.parse(socket.handshake.headers['cookie']));
    // userController.getUser().then((data) => { socket.emit('userObj', data); });

    
  }
) 
// io.on('clip', () => { 
//   console.log('in clip')
// })

server.listen(8080);  


