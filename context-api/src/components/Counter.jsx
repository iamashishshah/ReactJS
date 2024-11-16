import { useContext, useState } from "react";
import { CounterContext } from "../context/Context";

function Counter() {
  // const [count, setCount] = useState(3)
  const countContext = useContext(CounterContext);
  
  return (
    <div>
      <button
        type="button"
        onClick={() => countContext.setCount((value) => value + 1)}
        className="bg-green-600 hover:bg-green-700 font-sans border-none outline-none px-4 py-2 rounded-lg m-2"
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => countContext.setCount((value) => value - 1)}
        className="bg-red-600 hover:bg-red-700 font-sans border-none outline-none px-4 py-2 rounded-lg m-2"
      >
        Decrease
      </button>
    </div>
  );
}

export default Counter;
