const nohm = require('nohm').Nohm;
module.exports = nohm.model('File',
  {
    properties: {
      createdAt: {
        type: 'string',
        validations: [
          ['notEmpty']
        ]
      },
      filePath: {
        type: 'string',
        unique: true,
        validations: [
          ['notEmpty'],
        ]
      },
      author: {
        type: 'json',
        validations: [
          ['notEmpty']
        ]
      },
    }
  });