import { useContext } from "react";
import { CartContext } from "../context/Cart.jsx";

function Card({ name, price, oldPrice }) {
  
  const { items, setItems } = useContext(CartContext);

  // const cart = useContext(CartContext)
  console.log(items)

  return (
    <div className="bg-transparent px-4 py-4 m-10 w-fit h-fit rounded-lg  border-2 border-sky-500">
      <p>Name: {name}</p>
      <p className="bg-green-600">
        <span className="text-lg">${price}</span>
        <span className="line-through text-sm">${oldPrice}</span>
      </p>
      <button
        className="bg-blue-600 hover:bg-blue-700 text-lg m-2 px-2 py-1 rounded-xl"
        onClick={() =>
          setItems([...items, { name: name, price: price, oldPrice: oldPrice }])
        }
      >
        add to cart
      </button>
    </div>
  );
}

export default Card;
