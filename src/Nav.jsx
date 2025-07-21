// Nav.jsx
import React, { useState, useContext  } from 'react';
import { Context } from "./App";
import { Link } from 'react-router-dom';
import './assets/styles/nav.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
    const { username } = useContext(Context);

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">My Foods</Link>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/book" onClick={() => setIsOpen(false)}>Book a Table</Link>
          <Link to="/food" onClick={() => setIsOpen(false)}>Food Menu</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/checkout" onClick={() => setIsOpen(false)}>Checkout</Link>
          <Link to="/order" onClick={() => setIsOpen(false)}>Your Orders</Link>          
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/signin" onClick={() => setIsOpen(false)}>Sign In</Link>
          {/* <Link to="/signup" onClick={() => setIsOpen(false)}>Sign Up</Link> */}
          <Link to="/" onClick={() => setIsOpen(false)}>{username || "User"}</Link>
          
        </div>
      </nav>
    </header>
  );
}

export default Nav;
