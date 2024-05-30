import { useState } from "react";

const CounterWithUseState = () => {
  const [counter, setCounter] = useState({ count: 0, err: null });

  const increment = () => {
    let newCount = counter.count + 1;

    if (newCount > 5) {
      setCounter({ ...counter, err: "Reached Maximum count" });
    } else {
      setCounter({count: counter.count + 1, err:null });
    }
  };

  const decrement = () => {
    let newCount = counter.count - 1;
    if (newCount < 0) {
      setCounter({ ...counter, err: "Reached Minimum count" });
    } else {
      setCounter({count: counter.count - 1, err:null });
    }
  };

  return (
    <div className="counter">
      <div className="count">{counter.count}</div>
      {counter.err ? <div className="err-msg">{counter.err}</div>: null}
      {/* {counter.err && <div className="err-msg">{counter.err}</div>} */}
      <div className="btns">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterWithUseState;
