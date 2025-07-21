// src/FoodMenu.jsx
import React, { useContext } from "react";
import { Context } from "./App"; // Assuming Context is defined in App.js
import "./assets/styles/food.css";
import vegbiryani from "./assets/images1/veg-bir.png";
import panner from "./assets/images1/panner.png";
import chicken65 from "./assets/images1/chicken-65.png";
import pizza from "./assets/images1/pizza.png";


const foodItems = [
  { id: 1, name: "Veg Biryani", price: 150, image: vegbiryani},
  { id: 2, name: "Paneer Butter Masala", price: 180, image: panner },
  { id: 3, name: "Chicken 65", price: 200, image: chicken65 },
  { id: 3, name: "pizza", price: 250, image: pizza },
];

const foods = [
  { id: 1, name: "Tiffens", image: vegbiryani},
  { id: 2, name: "Meals", image: panner },
  { id: 3, name: "Western", image: chicken65 },
  { id: 3, name: "Biriyani", image: chicken65 },
  { id: 3, name: "Meat", image: chicken65 },
  { id: 3, name: "Sea Food", image: chicken65 },
  { id: 3, name: "Salads", image: chicken65 },
  { id: 3, name: "Salads", image: chicken65 } 
]

function FoodMenu() {
  const { cart, setCart } = useContext(Context);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (

    <div className="main-food">
      <div className="categoris">
          <h2>Select the Food type</h2>
          <div className="food-grid">
          {foods.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
           </div>
        ))}
      </div>

      </div>

   <div className="food-menu">
      <h2>Our Popular Dishes</h2>
      <div className="food-grid">
        {foodItems.map((item) => (
          <div className="food-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default FoodMenu;
