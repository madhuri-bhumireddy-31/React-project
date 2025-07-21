import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './home';
import Food from './food';
import Signin from './signin';
import Signup from './signup';
import Cart from './cart';
import Checkout from './checkout';
import Order from './orders';  // Make sure you created this page
import Tiffens from "./components/tiffens";
import Contact from './contact'; // optional, if you have this
import BookTable from './book'; // optional, if you have this

import './app.css';
import { OrderProvider } from "./OrderContext"; // ✅ Import OrderProvider

// Create a global Context for user/cart
export const Context = React.createContext();

function App() {
  const [username, setUsername] = useState("");
  const [cart, setCart] = useState([]);

  return (
    <Context.Provider value={{ username, setUsername, cart, setCart }}>
      <OrderProvider> {/* ✅ Wrap with Order Context */}
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<Order />} />
            <Route path="/tiffens" element={<Tiffens />} />
            <Route path="/contact" element={<Contact />} /> {/* optional */}
            <Route path="/book" element={<BookTable />} /> {/* optional */}
          </Routes>
        </Router>
      </OrderProvider>
    </Context.Provider>
  );
}

export default App;
