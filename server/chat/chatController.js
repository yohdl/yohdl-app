
const Nohm = require('nohm').Nohm;
const Chat = require('./chatModel');
const chatController = {};

chatController.getChat = function (socket) {
  
}
chatController.createChat = function (data) {
  console.log(data);
  let chat = Nohm.factory('Chat');
  chat.p(data);
  chat.save(function (err) {
    if (err) {
      console.log('some sort of err', chat.errors);
    } else {
      console.log('chat created!', chat);
    }
  })
}

module.exports = chatController;