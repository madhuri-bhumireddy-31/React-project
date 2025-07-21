// food.jsx
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./App";
import "./assets/styles/food.css";

import vegbiryani from "./assets/images1/tiffen.png";
import panner from "./assets/images1/panner.png";
import chicken65 from "./assets/images1/chicken-65.png";

const foodCategories = [
  { id: 1, name: "Tiffens", image: vegbiryani, path: "/tiffens" },
  { id: 2, name: "Meals", image: panner, path: "/tiffens" },
  { id: 3, name: "Western", image: chicken65, path: "/tiffens" },
  { id: 4, name: "Biriyani", image: chicken65, path: "/tiffens" },
  { id: 5, name: "Meat", image: chicken65, path: "/tiffens" },
  { id: 7, name: "Salads", image: chicken65, path: "/tiffens" },
];

function FoodMenu() {
  const [search, setSearch] = useState("");

  const filteredCategories = foodCategories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main-food">
      <div className="food-menu">
        <h2>Select the Food Type</h2>
        <input
          type="text"
          placeholder="Search food category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="food-search"
        />
        <div className="food-grid">
          {filteredCategories.map((item) => (
            <Link to={item.path} key={item.id} className="food-card-link">
              <div className="food-card">
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodMenu;
