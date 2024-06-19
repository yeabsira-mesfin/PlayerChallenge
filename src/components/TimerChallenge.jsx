import React, { useState,useRef } from "react";
import ResultModal from "./ResultModal";
const TimerChallenge = ({ title, targetTime }) => {
  const dialog = useRef();
  const timer = useRef();
 const [timeRemaining,setTimeRemaining] = useState(targetTime * 1000);
 const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
 if(timeRemaining <= 0){
  clearInterval(timer.current);
  
  dialog.current.open();
 }
 function handleReset(){
  setTimeRemaining(targetTime * 1000);
 }
 
  function handleStart() {
    timer.current = setInterval(() => {
        setTimeRemaining(prevTimeRemainig => prevTimeRemainig - 10)
    }, 10);

}
  function handleStop(){
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
     <ResultModal onReset = {handleReset} ref = {dialog} remainingTime = {timeRemaining} targetTime={targetTime}/>
    <section className="challenge">
      <h2>{title}</h2>
      
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerIsActive? handleStop:handleStart}>{timerIsActive? 'Stop': 'Start'} Challenge</button>
      </p>
      <p className={timerIsActive? 'active':''}>{timerIsActive? 'Time is runnig':'Timer inactive'}</p>
    </section>
    </>
  );
};

export default TimerChallenge;
