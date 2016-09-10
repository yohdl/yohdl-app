const fileController = {}
const Nohm = require('nohm').Nohm;
const File = require('./fileModel');
let fileCount = 0;

// fileController.getFileCount = function () {
//   File.find(function (err, ids) {
//     fileCount = ids.length;
//   })
// }



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
  // fileController.getFileCount();
  console.log('inside file ctrl create file');
  let file = Nohm.factory('File');
  filePath = 'clip' + fileCount++;
  file.p({author: 'jose', filePath: filePath, createdAt: '11'});
  console.log(file);
  return saveFile = new Promise((resolve, reject) => {
    file.save(function (err) {
      if (err) {
        reject(err);
      } else {
        console.log('inside else in create file');
             ///need to store file path name 
        resolve(filePath);
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