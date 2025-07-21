import React, { useContext } from "react";
import { OrderContext } from "./OrderContext";

function Checkout() {
  const { orderedItems } = useContext(OrderContext);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-orange-500 text-center">Order Summary</h2>

      {orderedItems.length === 0 ? (
        <p className="text-center text-gray-600">No items ordered yet.</p>
      ) : (
        <div className="space-y-4">
          {orderedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-md rounded-lg p-4 space-x-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <h4 className="text-lg font-semibold text-black">{item.name}</h4>
                <p className="text-gray-700">Price: ₹{item.price}</p>
                <p className="text-gray-700">Qty: {item.qty || 1}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
