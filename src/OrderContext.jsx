// src/OrderContext.js
import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderedItems, setOrderedItems] = useState([]);

  return (
    <OrderContext.Provider value={{ orderedItems, setOrderedItems }}>
      {children}
    </OrderContext.Provider>
  );
};
