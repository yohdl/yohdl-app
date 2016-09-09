import React, {Component} from 'react';

class ClipsList extends Component {
  render() {
    return (
      <div>
        <ul>
        	{this.props.clips.forEach((item) =>
        		<li>{item}</li>
        		console.log(this.props, 'clips props')
        		)}
        </ul>
      </div>
    );
  }
}

export default ClipsList;