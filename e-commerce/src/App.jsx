import { useContext } from "react"
import Card from "./components/Card"
import { CartContext, useCart } from "./context/Cart"

function App() {
  // const { items } = useContext(CartContext)
  const items = useCart()

  const total = items.reduce((a, b) => a + b.price, 0)
  return (
    <>
      <h1>Welcome to Context API</h1>
      <Card name="Nike Air Force" price={499} oldPrice={"300"}/>
      <Card name="Nike Air Force2" price={49} oldPrice={"30"}/>
      <h5>Total Price: {total} </h5>
    </>
  )
}
export default App
