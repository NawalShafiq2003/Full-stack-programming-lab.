import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <h1 className="counter-title">Counter App</h1>
        <p className="counter-subtitle">Lab Task 1 — React State</p>

        <div className={`counter-display ${count === 0 ? "zero" : count >= 10 ? "high" : ""}`}>
          {count}
        </div>

        {count === 0 && (
          <p className="counter-hint">Count cannot go below 0</p>
        )}

        <div className="btn-row">
          <button className="btn btn-increment" onClick={increment}>
            + Increment
          </button>
          <button
            className="btn btn-decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            − Decrement
          </button>
          <button className="btn btn-reset" onClick={reset}>
            ↺ Reset
          </button>
        </div>

        <div className="state-info">
          <span className="state-label">State:</span>
          <code>count = {count}</code>
        </div>
      </div>
    </div>
  );
}

export default Counter;
