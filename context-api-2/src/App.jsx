import { useContext } from "react";
import Button from "./components/Button.jsx"
import { CounterContext } from "./context/Counter.jsx";


function App() {

  const {count} = useContext(CounterContext)
  return (
    <>
      <p className="text-lg">
        Your value is here: <b>{count}</b>
      </p>
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  );
}

export default App
