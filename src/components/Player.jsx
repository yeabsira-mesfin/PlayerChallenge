import { useState,useRef } from "react";
export default function Player() {
 const playerName = useRef();
 const [name,setName] = useState();
 function handleClick(){
  setName(playerName.current.value);
 }
 let buttonCaption = 'Set Name';
 if(name){
  buttonCaption = 'Edit'
 }
  return (
    <section id="player">
      <h2>Welcome {name ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>{buttonCaption}</button>
      </p>
    </section>
  );
}
