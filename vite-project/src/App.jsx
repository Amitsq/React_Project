import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    //  console.log("clicked", counter)
    // counter = counter +1
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subValue = () => {
    if (counter != 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Hello React Project</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <button onClick={subValue}>decrease value</button>
    </>
  );
}

export default App;
