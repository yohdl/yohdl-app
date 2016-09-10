const nohm = require('nohm').Nohm;
module.exports = nohm.model('Chat',
  {
    properties: {
      createdAt: {
        type: 'timestap',
        validations: [
          ['notEmpty']
        ]
      },
      files: {
        defaultValue: '[]',
        type: 'json'
      },
      users: {
        defaultValue: '[]',
        type: 'json'
      },
      name: {
        type: 'string',
        validations: [
          ['notEmpty']
        ]
      }
    }
  });