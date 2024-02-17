import { forwardRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
{ targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;
  return createPortal(
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      <h2>You {userLost ? "lost" : "won"}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{(remainingTime / 1000).toFixed(2)} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
