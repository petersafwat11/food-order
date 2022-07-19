import "./App.css";
import { useState,useEffect } from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import ContextProvider from './store/ContextProvider';

function App() {
  const [showCart, setShowCart] = useState(false);
   const showCartHandeler= ()=>{
    setShowCart(true)
  }
  const hideCartHandeler= ()=>{
   setShowCart(false)
  }

  
  return (
    <ContextProvider>
        <Home showCart={showCartHandeler} />
        {showCart && <Cart hideCart={hideCartHandeler}/>}
    </ContextProvider>
  );
}

export default App;
