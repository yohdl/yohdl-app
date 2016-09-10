const userController = {};
const gravatar = require('node-gravatar')
const Nohm = require('nohm').Nohm;
const User = require('./userModel');


userController.getUser = function (socket) {
  

}

userController.createUser = function (data) {
  console.log(data);
  let user = Nohm.factory('User');
  user.p(data);
  user.save(function (err) {
    if (err) {
      console.log('some sort of err', user.errors);
    } else {
      console.log('user created!', user.id);
    }
  })
}

userController.verifyUser = function () {

}  
userController.findAllUsers = function () {
  User.find((err, ids) => console.log(ids));
}

module.exports = userController;