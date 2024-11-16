import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let text = ""
  const addValue = () =>{
    if( count <= 19){
      /*
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      */
     
      // this is actually concept of batching(i.e. react doesn't send everything when you perform the operation)

// How to Fix It
// To correctly increment count by 4, you should use the functional form of setCount, which takes the previous state as an argument.

      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
      setCount((prevCount) => prevCount + 1)
    }
  }
  return (
    <>
      <h1>Simple Counter program</h1>
      <p>Value: { count }</p>
      <p> { text}</p>
      {/* <button onClick = { () => (setCount(count + 1))}>Add value</button> */}
      <button onClick = { addValue }>Add value</button>
      <button onClick = { () => (setCount(count - 1)) }>Subtract value</button>
    </>
  )
}

export default App
