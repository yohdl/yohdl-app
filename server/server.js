


app.post('/signin'') -> cookiectrl -> userCtrl -> /yohdl
app post login -> cookiectrl -> userCtrl -> /yohdl

on connect -> etablish connection, get id from cookie, query users for user send user object 
on click -> pass chat id {chat_id: String } ->query chats by passed id -> query files-> 
  send back an object 
{
  id: createdAt: ,
    chatName: ,
    users: [array of id strings],
    files: [array of file objects {id: string, createdAt: Date, filePath:  , author: "useridstring", played: [array of userid strings] }]
  }
on send > user will send file object ^^, create file in database add file id to chat >
  broadcast chat object to other clients

  on client recieve data
