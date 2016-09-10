import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Recorder from './recordClip.jsx';
import ChatList from './chatList.jsx';
import ClipsList from './clipsList.jsx';
var socket = io.connect();


class App extends Component {
	constructor() {
		super();
		this.state = {id: 5678, chats:[{chatName:'Codesmith', files:[1, 2, 3], id: 679}, {chatName:'MakerSquare', files:[4, 5, 6], id: 123}] }
	}

	selectChat(id) {
		console.log(id);
		socket.emit('chatID', id);
	}

	componentWillRender() {
		var that = this;
		socket.on('userObj', function(data) {
			that.setState({data});
			console.log(that.state, 'current state');
		})
	}

  render() {
    return (
      <div className="Header">
        <h1>Yodle.</h1>
        	<ChatList chats={this.state.chats}  select={this.selectChat}/>
        	<ClipsList clips={this.state.chats[0].files} />
      </div>
    );
  }
}

const styles = {
	container: {
		size: '80px',
	},
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);