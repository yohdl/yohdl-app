client.select(0);
client.on('connect', () => {
  console.log('connected to redis');
  Nohm.setClient(client);
  Nohm.setPrefix('yohdl');
  userController.getUsers();
});
client.on('connect', () => {
  console.log('connected to redis');
  Nohm.setClient(client);
  Nohm.setPrefix('yohdl');
  chatController.
  });
//     userController.createUser({
//     name: "jasdfafsad",
//     email: "joseadfafsadeeeeeeeeeeee@jmail.com",
//     password: "password1",
//     chats: JSON.stringify(['someid']),
//     gravatarEmail: "some shit goes here"
//   });
//     userController.createUser({
//     name: "jddd",
//     email: "joseasdfasdeeeeeeeeeeee@jmail.com",
//     password: "password1",
//     chats: JSON.stringify(['someid']),
//     gravatarEmail: "some shit goes here"
//     });
//     userController.createUser({
//     name: "jsdfas",
//     email: "joseeeedasdfaeeeeeeeee@jmail.com",
//     password: "password1",
//     chats: JSON.stringify(['someid']),
//     gravatarEmail: "some shit goes here"
//   });
// });
// client.select(0);
// client.on('connect', () => {
//   console.log('connected to redis');
//   Nohm.setClient(client);
//   Nohm.setPrefix('yohdl');
//   fileController.createFile({
//     createdAt: 111111,
//     filePath: 'clips/1234',
//     author: JSON.stringify({ id: 123, name: 'Jose' })
//   });
// });
// client.on('connect', () => {
//   console.log('connected to redis');
//   Nohm.setClient(client);
//   Nohm.setPrefix('yohdl');
//   chatController.createChat({
//     createdAt: 111111,
//     files: JSON.stringify(['123', '233','2423']),
//     users: JSON.stringify([ 'iswuo2ie73mfr16tjltj',
//   'iswuo2ie5pmafnddjdwj',
//   'iswuo2iedxrefn4wr0py',
//   'iswk144i4nqdgp13if2r',
//   'iswk2tvn53yspa3x50v6',
//   'iswjuc6d75hon3220seb',
//   'iswjsazw9jiz5d9b95w7',
//   'iswuo2idelullg32bo3' ]),
//     name: 'superdopechat'
//   });
// });