const nohm = require('nohm').Nohm;
module.exports = nohm.model('File',
  {
    properties: {
      createdAt: {
        type: 'timestamp',
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