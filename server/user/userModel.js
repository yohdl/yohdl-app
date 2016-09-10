const nohm = require('nohm').Nohm;

module.exports = nohm.model('User',
  {
    properties: {
      name: {
        type: 'string',
        index: true,
        unique: true,
        validations: [
          ['notEmpty']
        ]
      },
      email: {
        type: 'string',
        unique: true,
        index: true,
        validations: [
          ['notEmpty'],
          ['email']
        ]
      },
      password: {
        type: 'string',
        validations: [
          ['notEmpty']
        ]
      },
      chats: {
        type: 'json'
      },
      gravatarEmail: {
        type: 'string',
        validations: [
          ['notEmpty']
        ]
      }
    }
  });