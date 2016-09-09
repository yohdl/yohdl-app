var socket = io.connect('http://localhost:8080');
console.log('------- into the main --------');

    socket.on('userObj', function(data) {
      console.log('socket is on ',data);
      // console.log('this', this);
      // that.parseData(data);
    });