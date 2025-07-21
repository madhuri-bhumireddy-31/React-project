import React, {useContext } from "react";
import { Context } from "../App";
import idliImg from "./tiffen/idly.png";
import dosaImg from "./tiffen/dosa.png";
import upmaImg from "./tiffen/upma.png";
import pongalImg from "./tiffen/pongal.png";
import chapathi from "./tiffen/chapathi.png";
import  combo from "./tiffen/All.png";

function Tiffens() {
  const tiffenItems = [
    { id: 1, name: "Idli", price: 30, image: idliImg },
    { id: 2, name: "Dosa", price: 40, image: dosaImg },
    { id: 3, name: "Upma", price: 35, image: upmaImg },
    { id: 4, name: "Pongal", price: 45, image: pongalImg },
    { id: 4, name: "Chapathi", price: 50, image: chapathi },
    { id: 4, name: "Combo", price:100 , image: combo },
  ];
   const { cart, setCart } = useContext(Context);
 
   const addToCart = (item) => {
     setCart([...cart, item]);
     alert("Your item is successfully added to cart")
   };
  
  return (
       <div className="food-menu">
      <h2>Our Popular Dishes</h2>
      <div className="food-grid">
        {tiffenItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tiffens;
