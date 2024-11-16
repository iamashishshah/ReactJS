import { useContext } from "react"
import { CounterContext } from "../context/Counter.jsx"

function Button() {
  const {count, setCount } = useContext(CounterContext)
  
  const increase = () => {
    if(count < 20) {
      setCount((value) => value + 1);
    }
  }
  const decrease = () => {
    if (count > 0) {
      setCount((value) => value - 1);
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="border-white bg-green-600 px-4 py-4 text-xl rounded-xl m-4 hover:bg-green-700 text-center"
          onClick={increase}
        >
          Increase
        </button>
        <button
          type="button"
          className="border-white bg-red-600 px-4 py-4 text-xl rounded-xl m-4 hover:bg-red-700"
          onClick={decrease}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default Button
