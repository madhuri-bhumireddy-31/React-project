import React, { useReducer } from "react";


const initialState = {
  step: 1, 
  deliveryInfo: {
    name: "",
    address: "",
    phone: ""
  },
  paymentInfo: {
    cardNumber: "",
    expiry: "",
    cvv: ""
  },
  completed: false 
};


function checkoutReducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "SET_DELIVERY_INFO":
      return { ...state, deliveryInfo: action.payload };
    case "SET_PAYMENT_INFO":
      return { ...state, paymentInfo: action.payload };
    case "SUBMIT":
      return { ...state, completed: true };
    default:
      return state;
  }
}

// Form component to collect delivery info
function DeliveryForm({ onSubmit, defaultValues }) {
  const [form, setForm] = React.useState(defaultValues);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow-md">
    <h2 className="text-base font-semibold">Delivery Information</h2>


  <input
    className="w-full border border-gray-300 p-2 rounded"
    name="name"
    placeholder="Full Name"
    value={form.name}
    onChange={handleChange}
    required
  />
  <input
    className="w-full border border-gray-300 p-2 rounded mt-4"
    name="address"
    placeholder="Address"
    value={form.address}
    onChange={handleChange}
    required
  /> 

  <input
    className="w-full border border-gray-300 p-2 rounded mt-4"
    name="phone"
    placeholder="Phone Number"
    value={form.phone}
    onChange={handleChange}
    required
  />
  <button
  type="submit"
  className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 mt-4 transition !important"
>
  Next
</button>
</form>
  );
}

function PaymentForm({ onSubmit, defaultValues, onBack }) {
  const [form, setForm] = React.useState(defaultValues);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
  <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-base font-semibold">Payment</h2>

      <input
        name="cardNumber"
        placeholder="Card Number"
        value={form.cardNumber}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-2 rounded mt-4"
      />
      <input
        name="expiry"
        placeholder="Expiry Date"
        value={form.expiry}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-2 rounded mt-4"
      />
      <input
        name="cvv"
        placeholder="CVV"
        value={form.cvv}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 p-2 rounded mt-4"
      />

      <div className="flex justify-between pt-4 ">
        <button
          type="button"
          onClick={onBack}
          className="bg-pink-400 text-black px-4 py-2 rounded hover:bg-gray-500 transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Next
        </button>
      </div>
    </form>
  );
}

function ReviewOrder({ state, onBack, onPlaceOrder }) {
  return (
    <div className="p-6 bg-white shadow-md rounded space-y-3 mt-20">
      <h2 className="text-xl font-bold text-orange-500 pt-0">Review</h2>

      <div className="space-y-1">
        <h3 className="text-lg font-bold  text-black-500 pt-3">Delivery Info:</h3>
        <p className="text-black pt-0">Name: {state.deliveryInfo.name}</p>
        <p className="text-black pt-0 ">Address: {state.deliveryInfo.address}</p>
        <p className="text-black pt-0">Phone: {state.deliveryInfo.phone}</p>
      </div>

      <div className="space-y-1">
        <h3 className="text-lg font-bold text-black-500 pt-3">Payment Info:</h3>
        <p className="text-black pt-0">
          Card Number: **** **** **** {state.paymentInfo.cardNumber.slice(-4)}
        </p>
        <p className="text-black pt-0">Expiry: {state.paymentInfo.expiry}</p>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          Back
        </button>
        <button
          onClick={onPlaceOrder}
          className="bg-orange-500 text-black px-4 py-2 rounded hover:bg-orange-600 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}


export default function Checkout() {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);


  const handleDeliverySubmit = (data) => {
    dispatch({ type: "SET_DELIVERY_INFO", payload: data });
    dispatch({ type: "NEXT_STEP" });
  };


  const handlePaymentSubmit = (data) => {
    dispatch({ type: "SET_PAYMENT_INFO", payload: data });
    dispatch({ type: "NEXT_STEP" });
  };


  const handlePlaceOrder = () => {
    dispatch({ type: "SUBMIT" });
    alert("Order placed successfully!");
  };


  const handleBack = () => {
    dispatch({ type: "PREV_STEP" });
  };


  if (state.completed) {
    return (
      <div className="p-6 bg-green-50 text-center rounded shadow-md mt-8">
      <h1 className="text-2xl font-bold text-green-700">Thank you for your order!</h1>
      <p className="mt-2 text-gray-700">Your order is being processed.</p>
    </div>
    );
  }


  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
      {state.step === 1 && (
        <DeliveryForm
          onSubmit={handleDeliverySubmit}
          defaultValues={state.deliveryInfo}
        />
      )}
      {state.step === 2 && (
        <PaymentForm
          onSubmit={handlePaymentSubmit}
          defaultValues={state.paymentInfo}
          onBack={handleBack}
        />
      )}
      {state.step === 3 && (
        <ReviewOrder
          state={state}
          onBack={handleBack}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
}
