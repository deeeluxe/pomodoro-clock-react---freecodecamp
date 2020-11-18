import React from "react";

function Session(props) {

  function decrementSessionLength() {

    if (props.sessionLength === 1) {
      return;
    } else {
      props.decrementSessionLength();
    }
  }

  function incrementSessionLength() {

    if (props.sessionLength === 60) {
      return;
    } else {
      props.incrementSessionLength();
    }
  }

  return (
    <section>
      <p id="session-label">Session Length</p>
      <div className="breakAndSessionBox">
        <button disabled={props.isPlaying ? "disabled" : ""} id="session-decrement" onClick={decrementSessionLength}>
          Down
        </button>
        <p id="session-length">{props.sessionLength}</p>
        <button disabled={props.isPlaying ? "disabled" : ""} id="session-increment" onClick={incrementSessionLength}>
          Up
        </button>
      </div>
    </section>
  );
}

export default Session;
