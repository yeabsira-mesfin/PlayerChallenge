import React from 'react'

const ResultModal = ({result,targetTime}) => {
  return (
    <dialog className='result-modal' open>
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
}

export default ResultModal