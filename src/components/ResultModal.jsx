import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{remainingTime > 0 ? `Your score: ${score}` : " "}</h2>
      <p>
        The target time was{" "}
        <b>
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </b>
      </p>
      <p>
        You stopped the timer with{" "}
        <b>{(remainingTime / 1000).toFixed(2)} seconds left.</b>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
