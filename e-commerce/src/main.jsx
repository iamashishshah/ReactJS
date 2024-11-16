import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContextProvider } from './context/Cart.jsx'

createRoot(document.getElementById("root")).render(
 
    <CartContextProvider>
      <App />
    </CartContextProvider>
  
);
