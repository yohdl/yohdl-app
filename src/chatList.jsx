import React, {Component} from 'react';

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
        	)}
        </ul>
      </div>
    );
  }
}

export default ChatList;