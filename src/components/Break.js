import { render } from '@testing-library/react';
import React from 'react'

function Break(props) {

    function decrementBreakLength() {
        if (props.breakLength === 1) {
            return 
        } else {
            props.decrementBreakLength();
        }
    }

    function incrementBreakLength() {
        if (props.breakLength === 60) {
            return
        } else {
            props.incrementBreakLength();
        }
    }

    return (
        <section>
            <p id="break-label">Break Length</p>
            <div className="breakAndSessionBox">
                <button id="break-decrement" onClick={decrementBreakLength}>Down</button>
                <p id="break-length">{props.breakLength}</p>
                <button id="break-increment" onClick={incrementBreakLength}>Up</button>
            </div>
        </section>
    )
}

export default Break;