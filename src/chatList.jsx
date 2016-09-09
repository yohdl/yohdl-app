import React, {Component} from 'react';
import

class ChatList extends Component {
	constructor() {
		super();
	}

  render() {
    return (
      <div>
      	<ul>
        {this.props.chats.forEach((item, index) =>
        	<li id={item.id}>{item.chatName}</li>
        	console.log(this.props, 'chatProps')
        	)}
        </ul>
      </div>
    );
  }
}

export default ChatList;