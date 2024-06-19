import React, { useState,useRef } from "react";
import ResultModal from "./ResultModal";
const TimerChallenge = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExp, setTimeExp] = useState(false);
 const timer = useRef();
  function handleStart() {
    timer.current = setTimeout(() => {
        setTimeExp(true);
    }, targetTime * 1000);
    setTimerStarted(true);

}
  function handleStop(){
    clearTimeout(timer.current);
  }
  return (
    <>
    {timerExp && <ResultModal result="lost" targetTime={targetTime}/>}
    <section className="challenge">
      <h2>{title}</h2>
      
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted? handleStop:handleStart}>{timerStarted? 'Stop': 'Start'} Challenge</button>
      </p>
      <p className={timerStarted? 'active':''}>{timerStarted? 'Time is runnig':'Timer inactive'}</p>
    </section>
    </>
  );
};

export default TimerChallenge;
