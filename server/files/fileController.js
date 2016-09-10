const Nohm = require('nohm').Nohm;
const File = require('./fileModel');

const fileController = {}
//middleware?
fileController.getFile = function (fileId) {
  return new Promise((resolve, reject) => {
    File.load(fileId, (err, file) => {
      if (err) {
        reject(err)
      } else {
        resolve(file);
      }
    });
  });
}
//fix this
fileController.createFile = function (data) {
  let file = Nohm.factory('File');
  //need to generate file id in model
  file.p(data);
  return new Promise((resolve, reject) => {
    file.save(function (err) {
      if (err) {
        reject(err);
      } else {
        ///need to store file path name 
        resolve(file);
      }
    });
  });


}
fileController.getAllFiles = function (idArr) {
  const promiseArr = [];
  idArr.forEach((id) => {
    promiseArr.push(new Promise((resolve, reject) => {
      File.load(id, (err, file) => {
        if (err) {
          console.log(err.message);
          reject(err);
        } else {
          resolve(file);
        }
      });
    }));
  });
  return promiseArr;
}
fileController.getFileCount = function () {
  File.find(function (err, ids) {
    fileCount = ids.length;
  })
}

module.exports = fileController