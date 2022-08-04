import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div className="App">
      <header className="App-header text-center">
        <div className="card-body my-5">
          <h1>Counter App</h1>
          <h2>{count}</h2>
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={() => setCount(count + 1)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            Increment
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            Decrement
          </button>
          <button
            className="btn btn-secondary mx-2"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            reset
          </button>
          {hover && <div>this will Increment</div>}
        </div>
      </header>
    </div>
  );
}

export default App;
