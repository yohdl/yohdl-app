const userController = {};
const gravatar = require('node-gravatar')
const Nohm = require('nohm').Nohm;
const User = require('./userModel');


userController.getUser = function (id) {
  return new Promise((resolve, reject) => {
    User.load(id, (err, user) => {
      if (err) {
        reject(err);
      } else {
        resolve(user);
      }
    });
  });
}

//need to make into middleware and get data from body
userController.createUser = function (data) {
  let user = Nohm.factory('User');
  //const data = req.body
  user.p(data);
  user.save(function (err) {
    if (err) {
      console.log('some sort of err', user.errors);
    } else {
      // req.userId = user.id;
      //next();
    }
  });
}
// userController.addChat(chatId) {
  
// }

userController.verifyUser = function (req, res, next) {
  email = req.body.email;
  password = req.body.password;
  User.load()

}
userController.getUsers = function (userIdArr) {
  const promiseArr = [];
  userIdArr.forEach((id) => {
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
  Promise.all(promiseArr).then(users => console.log(users))
}
userController.getAllUsers = function () {
  User.find((err, ids) => {
    console.log(ids);
    return ids;
  })
}

module.exports = userController;