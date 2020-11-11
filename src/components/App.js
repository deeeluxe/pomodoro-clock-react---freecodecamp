import "../App.css";
import Timer from "./Timer";
import Session from "./Session";
import Break from "./Break";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timerMinute: 25,
      breakLength: 5,
      sessionLength: 25,
    };
    this.onDecrementBreakLength = this.onDecrementBreakLength.bind(this);
    this.onIncrementBreakLength = this.onIncrementBreakLength.bind(this);
    this.onIncrementSessionLength = this.onIncrementSessionLength.bind(this);
    this.onDecrementSessionLength = this.onDecrementSessionLength.bind(this);
    this.onDecrementTimerMinute = this.onDecrementTimerMinute.bind(this);
    this.onSwitchToBreak = this.onSwitchToBreak.bind(this);
  }

  onDecrementBreakLength() {
    this.setState({
      breakLength: this.state.breakLength - 1,
    });
  }

  onIncrementBreakLength() {
    this.setState({
      breakLength: this.state.breakLength + 1,
    });
  }

  onDecrementSessionLength() {
    this.setState({
      sessionLength: this.state.sessionLength - 1,
      timerMinute: this.state.sessionLength - 1
    });
  }

  onIncrementSessionLength() {
    this.setState({
      sessionLength: this.state.sessionLength + 1,
      timerMinute: this.state.sessionLength + 1
    });
  }

  onDecrementTimerMinute() {
    this.setState({
      timerMinute: this.state.timerMinute - 1,
    });
  }

  onSwitchToBreak() {
    this.setState({
      timerMinute: this.state.breakLength
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Test</h2>
        <Timer
          switchToBreak={this.onSwitchToBreak}
          timerMinute={this.state.timerMinute}
          decrementTimerMinute={this.onDecrementTimerMinute}
        />
        <section className="breakAndSessionBoxInApp">
          <Break
            breakLength={this.state.breakLength}
            decrementBreakLength={this.onDecrementBreakLength}
            incrementBreakLength={this.onIncrementBreakLength}
          />
          <Session
            sessionLength={this.state.sessionLength}
            decrementSessionLength={this.onDecrementSessionLength}
            incrementSessionLength={this.onIncrementSessionLength}
          />
        </section>
      </div>
    );
  }
}

export default App;
