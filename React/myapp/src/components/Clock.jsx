import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>
                {props.timeZone} &nbsp;
                현재시간: { new Date().toLocaleTimeString('ko',{timeZone:'Europe/Paris'})}
            </h1>
        </div>
    )
}

export default Clock;