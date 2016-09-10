
const Nohm = require('nohm').Nohm;
const Chat = require('./chatModel');
const User = require('./../user/userModel');
const File = require('./../files/fileModel');
const userController = require('./../user/userController');
const fileController = require('./../files/fileController');
const chatController = {};
let fileCount;
//send master data with all user objects in chat
//all file objects in file
chatController.getInitialData = function (id) {
  console.log('inside getInitialData');


}
chatController.addUser = function (userId) {
  console.log('inside addUser');



}
chatController.addFile = function (fileId) {
  
}


chatController.getChat = function (chatId) {
  console.log('inside getChat');
  return new Promise((resolve, reject) => {
    Chat.load(chatId, function (err, chat) {
      if (err) {
        console.log(err);
      } else {
        resolve(chat);
        //userController.getUsers(chat.users).then(userArr, ()=>{})
      }
    });
  });
}
///make into promise
chatController.createChat = function (data) {
  console.log('inside create chat');
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
chatController.getAllUserObjs = function (idArr) {
  console.log('inside get all users');
  const promiseArr = [];
  idArr.forEach((id) => {
    promiseArr.push(new Promise((resolve, reject) => {
      User.load(id, (err, user) => {
        if (err) {
          console.log(err.message);
          reject(err);
        } else {
          resolve(user);
        }
      });
    }));
  });
  return promiseArr;
}
chatController.getAllFileObj = function (chatId) {
  //?? this.getChat()?
  chatController.getChat(id).then(function (chat) {
    return fileController.getAllFileObj(chat.files);
  })
    //what is the ouptu here? test tommorrow, i assume its an array of objects;
  .then()
}


module.exports = chatController;