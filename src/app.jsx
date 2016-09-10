import React, {Component} from 'react';
import ReactDOM from 'react-dom'
// import Recorder from './recordClip.jsx';
// import ChatList from './chatList.jsx';
// import ClipsList from './clipsList.jsx';
// var socket = io.connect();

class App extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {id: 5678, chats:[{name:'Codesmith', files:[1, 2, 3]}, {name:'MakerSquare', files:[4, 5, 6]}] }
	// }

	// getChats() {
	// 	var that = this;
	// 	socket.on('userObj', function(data) {
	// 		this.setState({data});
	// 		console.log(this.state, 'current state');
	// 	})
	// }

  render() {
    return (
      <div className="Header">
        <h1>Yodle.</h1>
        	// <Recorder user={this.state.id}/>
        	// <ChatList chats={this.state.chats}/>
        	// <ClipsList clips={this.state.chats[0].files}/>
      </div>
    );
  }
}
ReactDOM.render(
	<App />,
	document.getElementById('app')
);