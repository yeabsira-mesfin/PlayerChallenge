import React, { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
    const [timer,setTimer] = useState(false)
    const [time]
    function handleStart(){
        setTimeout(()=>{
            setTimer(true)
        },targetTime*1000);
    }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timer && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
            Start Challenge
        </button>
      </p>
      <p className="active">
        Time is runnig
      </p>
    </section>
  );
};

export default TimerChallenge;
