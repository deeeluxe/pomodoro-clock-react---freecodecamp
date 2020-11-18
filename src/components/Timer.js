import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerSecond: 0,
      intervalId: 0,
      isBreak: false,
      isRunning: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (!this.state.isRunning) {
      let intervalId = setInterval(this.decrementTimer, 1000);
      this.setState({
        isRunning: true,
        intervalId: intervalId,
      });
      this.props.blockButtonsIfPlaying(true);
    } else {
      clearInterval(this.state.intervalId);

      this.setState({
        isRunning: false,
      });
    }
  }

  decrementTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if (this.props.timerMinute === 0) {
          this.audio.play();
          if (!this.state.isBreak) {
            this.setState({
              isBreak: true,
            });
            this.props.switchToBreak();
          } else {
            this.setState({
              isBreak: false,
            });
            this.props.switchToSession();
          }
        } else {
          this.props.decrementTimerMinute();
          this.setState({
            timerSecond: 59,
          });
        }
        break;
      default:
        this.setState({
          timerSecond: this.state.timerSecond - 1,
        });
        break;
    }
  }

  reset() {
    this.setState({
      isRunning: false,
      isBreak: false,
      timerSecond: 0,
      intervalId: 0,
    });
    this.props.reset();
    clearInterval(this.state.intervalId);
    this.audio.pause();
    this.audio.currentTime = 0;
    this.props.blockButtonsIfPlaying(false);
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
        <button id="start_stop" onClick={this.handleClick}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button id="reset" onClick={this.reset}>
          Reset
        </button>
        <audio
          id="beep"
          ref={(audio) => {this.audio = audio}}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ></audio>
      </div>
    );
  }
}
export default Timer;
  