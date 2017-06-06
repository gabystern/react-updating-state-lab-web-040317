import React from 'react';
import ReactDOM from 'react-dom';

class YouTubeDebugger extends React.Component {

  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSecondClick = this.handleSecondClick.bind(this)
  }

  // handleClick(event){
  //   this.setState({
  //     settings: {
  //       ...this.state.settings, bitrate: 12,
  //     }
  //   })
  // }

  handleClick(event){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      }),
    });
  }

  handleSecondClick(event){
    this.setState({
      settings: Object.assign({}, this.state.settings, {
       video: {resolution: '720p'},
      }),
    })
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>Bitrate</button>,
        <button className="resolution" onClick={this.handleSecondClick}>Resolution</button>
      </div>
    );
  }
};

export default YouTubeDebugger;
