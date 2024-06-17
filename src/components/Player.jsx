import { useState } from "react";
export default function Player() {
 const [name,setName] = useState('');
 const [isediting,setIsEditing] = useState(false);

 function handleName(event){
  setName(event.target.value)
 }

 function handleClick(){
  setIsEditing((editing) => !editing)
 }
 let buttonCaption = 'Set Name';
 if(isediting){
  buttonCaption = 'Edit'
 }
  return (
    <section id="player">
      <h2>Welcome {isediting? name : 'unknown entity'}</h2>
      <p>
        <input type="text" value={name} onChange={handleName}/>
        <button onClick={handleClick}>{buttonCaption}</button>
      </p>
    </section>
  );
}
