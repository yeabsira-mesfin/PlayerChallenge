import React, { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timer, setTimer] = useState(false);
  const [timeExp, setTimeExp] = useState(false);
  function handleStart() {
    setTimeout(() => {
      setTimeExp(true);
    }, targetTime * 1000);
    setTimer(true);
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timer && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>{timer? 'Stop': 'Start'} Challenge</button>
      </p>
      <p className={timer? 'active':''}>{timer? 'Time is runnig':'Timer inactive'}</p>
    </section>
  );
};

export default TimerChallenge;
