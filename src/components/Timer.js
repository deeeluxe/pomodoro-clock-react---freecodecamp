import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerSecond: 0,
      intervalId: 0,
      isBreak: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
  }

  handleClick() {
    let intervalId = setInterval(this.decrementTimer, 1000);

  }

  decrementTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if(this.props.timerMinute === 0) {
          this.setState({
            isBreak: true
          });
          this.props.switchToBreak();
        } else {
          this.props.decrementTimerMinute();
          this.setState({
            timerSecond: 59
          });
        }
        break;
      default:
        this.setState({
          timerSecond: this.state.timerSecond - 1
        })
        break;
    }
  }


  render() {
    return (
      <div className="timer-box">
        <p id="timer-label">{!this.state.isBreak ? "Session" : "Break"}</p>
        <p id="time-left">
          {this.props.timerMinute < 10
            ? "0" + this.props.timerMinute
            : this.props.timerMinute}
          :
          {this.state.timerSecond < 10
            ? "0" + this.state.timerSecond
            : this.state.timerSecond}
        </p>
        <button id="start_stop" onClick={this.handleClick}>Start</button>
        <button id="reset">Reset</button>
      </div>
    );
  }
}
export default Timer;
