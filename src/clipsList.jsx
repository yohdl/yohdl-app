import React, {Component} from 'react';

class ClipsList extends Component {
  render() {
    return (
      <div>
        <ul>
        	{this.props.clips.forEach((item) =>
        		<li>{item}</li>
        		)}
        </ul>
      </div>
    );
  }
}

export default ClipsList;