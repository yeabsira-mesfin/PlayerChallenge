import React,{forwardRef,useImperativeHandle,useRef} from 'react'

const ResultModal = forwardRef(function ResultModal ({result,targetTime},ref) {
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
            Your {result}
        </h2>
        <p>The target time was <b>{targetTime} second {targetTime>1? 's': ''}</b></p>
        <p>You stopped the timer with <b>X seconds left.</b></p>
        <form action="dialog">
            <button>Close</button>
        </form>
    </dialog>
  )
})

export default ResultModal