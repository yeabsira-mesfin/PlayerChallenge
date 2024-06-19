import React,{forwardRef} from 'react'

const ResultModal = forwardRef(function ResultModal ({result,targetTime},ref) {
  return (
    <dialog ref={ref} className='result-modal' >
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