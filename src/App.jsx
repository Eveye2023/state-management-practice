import "./App.css";
import CounterWithUseState from "./component/CounterWithUseState";
import CounterWithUseReducer from "./component/CounterWithUseReducer";

function App() {
  return (
    <div className="main">
      <div>
        <div>--- useState Counter ---</div>
        <CounterWithUseState />
      </div>
      <div>
        <div>--- useReducer Counter ---</div>
        <CounterWithUseReducer />
      </div>
    </div>
  );
}

export default App;
