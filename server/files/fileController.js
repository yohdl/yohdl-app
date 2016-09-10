const Nohm = require('nohm').Nohm;
const File = require('./fileModel');

const fileController = {}
fileController.getFile = function (fileId) {

}
fileController.createFile = function (data) {
  console.log(data);
  let file = Nohm.factory('File');
  file.p(data);
  file.save(function (err) { 
    if (err) {
      console.log('some sort of err', file.errors);
    } else {
      console.log('file created!', file.id);
    }
  })
}


module.exports = fileController