import React from 'react';
import ReactDOM from 'react-dom';

class DigitalClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    this.setState({timesClicked: this.state.timesClicked + 1})
  }

  render() {
    return (
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }

}

export default DigitalClicker
