import React, {Component} from 'react';
import Recorder from './recordClip';
import ChatList from './chatList';
import ClipsList from './clipsList';
import './App.css';
var socket = io.connect();

class App extends Component {
	constructor() {
		super();
		this.state = {id: 5678, chats:[{name:'Codesmith', files:[1, 2, 3]}, {name:'MakerSquare', files:[4, 5, 6]}] }
	}

	getChats() {
		var that = this;
		socket.on('userObj', function(data) {
			this.setState({data});
			console.log(this.state, 'current state');
		})
	}

  render() {
    return (
      <div className="Header">
        <h1>Yodle.</h1>
        	<Recorder user={this.state.id}/>
        	<ChatList chats={this.state.chats}/>
        	<ClipsList clips={this.state.chats[0].files}/>
      </div>
    );
  }
}

React.render(
	<App />,
	document.getElementById('app')
);