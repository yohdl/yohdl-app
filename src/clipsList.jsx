import React, {Component} from 'react';
import ReactAudioPlayer from 'react-audio-player';

class ClipsList extends Component {
  render() {
    let items = this.props.clips.map((item) => {return <li> <ReactAudioPlayer id={item} src="" autoPlay="true" /> </li>});

    return (
      <span id="clips">
        <ul>
        	{items}
        </ul>
      </span>
    );
  }
}

export default ClipsList;