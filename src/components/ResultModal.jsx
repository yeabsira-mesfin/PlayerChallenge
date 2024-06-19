import React,{forwardRef,useImperativeHandle,useRef} from 'react'

const ResultModal = forwardRef(function ResultModal ({targetTime, remainingTime, onReset},ref) {
 const dialog =  useRef();

 
  useImperativeHandle(ref,()=> {
    return {
      open(){
        dialog.current.showModal();
      }
    }
  });
  return (
    <dialog ref={dialog} className='result-modal' >
        <h2>
            You {remainingTime > 0 ? 'won': 'lost'}
        </h2>
        <p>The target time was <b>{targetTime} second {targetTime>1? 's': ''}</b></p>
        <p>You stopped the timer with <b>{(remainingTime/1000).toFixed(2)} seconds left.</b></p>
        <form action="dialog" onSubmit={onReset}>
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal