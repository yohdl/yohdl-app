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



client.on('connect', () => {
  console.log('connected to redis');
  Nohm.setClient(client);
  Nohm.setPrefix('yohdl');
});
app.use(express.static('client'))
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



app.post('/clip', (req, res) => {
  console.log('body', req.body);
  var data = req.body;
  // var fileId = req.cookie.id;
  
  fileController.createFile({createdAt: 111, author: 1}).then((filepath) => {

    console.log(__dirname + '/../client/' + filePath);
    console.log(data);
    fs.writeFile(__dirname + '/../client/' + filePath, data, (err) => {
      if (err) {
        throw err;
      } //else  {
      //   console.log(file);
      // }
    });
  })
  // let buf = new Buffer.(req.body.toString('binary'),'binary');
  res.send('ok');
})

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


