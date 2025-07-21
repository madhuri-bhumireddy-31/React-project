import React, { useContext, useState, useCallback, useMemo } from "react";
import { Context } from "./App";
import { OrderContext } from "./OrderContext"; 
import { Link } from "react-router-dom";
import "./assets/styles/cart.css";

function Invoice() {
  const { cart, setCart } = useContext(Context);
  const { setOrderedItems } = useContext(OrderContext); 
  const [removedItems, setRemovedItems] = useState([]);

  const handleContinue = () => {
    setOrderedItems(cart);         
    setCart([]);                   
  };

  const handleRemove = useCallback((product, index) => {
    setCart((cart) => {
      const newCart = [...cart];
      newCart.splice(index, 1);
      return newCart;
    });
    setRemovedItems((items) => [product, ...items]);
  }, [setCart]);

  const handleUndo = useCallback(() => {
    if (removedItems.length > 0) {
      const lastRemoved = removedItems[0];
      setCart((cart) => [...cart, lastRemoved]);
      setRemovedItems((items) => items.slice(1));
    }
  }, [removedItems, setCart]);

  const handleQtyChange = (id, delta) => {
    setCart((cart) =>
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) }
          : item
      )
    );
  };

  const totalProductPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
  }, [cart]);

  const totalDiscount = useMemo(() => {
    return cart.reduce((sum, item) => {
      if (item.originalPrice && item.price < item.originalPrice) {
        return sum + ((item.originalPrice - item.price) * (item.qty || 1));
      }
      return sum;
    }, 0);
  }, [cart]);

  const finalPrice = totalProductPrice - totalDiscount;

  return (
    <div className="invoice-container">
      <div>
        <h1>Your cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-row">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div className="price-info">
                    <span className="item-price">₹{item.price}</span>
                    {item.originalPrice && item.price < item.originalPrice && (
                      <>
                        <span className="item-original">₹{item.originalPrice}</span>
                        <span className="item-discount">
                          {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% Off
                        </span>
                      </>
                    )}
                  </div>
                  <div className="item-meta">
                    Qty:
                    <button onClick={() => handleQtyChange(item.id, -1)} className="qty-btn">-</button>
                    <span className="qty-number">{item.qty || 1}</span>
                    <button onClick={() => handleQtyChange(item.id, 1)} className="qty-btn">+</button>
                  </div>
                  <button onClick={() => handleRemove(item, index)} className="remove-btn">
                    × Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {removedItems.length > 0 && (
          <div className="undo-box">
            Removed <b>{removedItems[0].name}</b>.
            <button onClick={handleUndo} className="undo-btn">Undo</button>
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="price-summary">
          <h3>Price Details ({cart.length} Items)</h3>
          <div className="price-line">
            <span>Total Product Price</span>
            <span>+ ₹{totalProductPrice}</span>
          </div>
          <div className="price-line discount">
            <span>Total Discounts</span>
            <span>- ₹{totalDiscount}</span>
          </div>
          <hr />
          <div className="price-total">
            <span>Order Total</span>
            <span>₹{finalPrice}</span>
          </div>

          <Link to="/checkout">
            <button className="continue-btn" onClick={handleContinue}>
              Continue
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Invoice;
