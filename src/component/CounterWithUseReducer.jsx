import { useReducer } from "react";

function counterReducer(counter, action) {
    switch (action.type) {
      case "increment":
        let newCount = counter.count + 1;
        if (newCount > 5) {
          return { ...counter, err: "Reached Maximum count" };
        }else{
            return {
                count: newCount,
                err: null,
              };
        }
        
      case "decrement":
        let newCount2 = counter.count - 1;

        if (newCount2 < 0) {
          return { ...counter, err: "Reached Minimum Count" };
        } else {
          return { count: newCount2, err: null };
        }

      default:
        return counter;
    }
}

const CounterWithUseReducer = () => {
  const [counter, dispatch] = useReducer(counterReducer, {
    count: 0,
    err: null,
  });


  return (
    <div className="counter">
      <div className="count">{counter.count}</div>
      {counter.err && <div className="err-msg">{counter.err}</div>}
      <div className="btns">
        <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterWithUseReducer;
