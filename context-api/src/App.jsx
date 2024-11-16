import { useContext } from "react"
import Counter from "./components/Counter.jsx"
import { CounterContext } from "./context/Context.jsx"

function App() {
 const counterState = useContext(CounterContext)
 console.log(counterState)

  return (
    <>
      <p className="text-xl font-bold">Author name: {counterState.name}</p>
      <h1 className="m-4">Context API: {counterState.count}</h1>
      < Counter/>
      < Counter/>
      < Counter/>
      < Counter/>
    </>
  )
}

export default App
