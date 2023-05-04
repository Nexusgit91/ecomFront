import React from "react";
import TimeComponent from "../../ProductList/Timer/TimeComponet";
import DressCart from "./DressCart";

export function AddToCart({
  handleClearCart,
  cartItems,
  handleRemoveFromCart,
  orderFormData,
  setOrderFormData,
  handleSubmitOrder,
}) {
  return (
    <section className="section">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff9900",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif",
            textShadow: "2px 2px 5px #333333",
            margin: "auto",
          }}
          className="mb-4"
        >
          Sales End's In
        </h2>
      </div>
      <div className="mb-5">
        <TimeComponent />
      </div>
      <DressCart
        handleClearCart={handleClearCart}
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        orderFormData={orderFormData}
        setOrderFormData={setOrderFormData}
        handleSubmitOrder={handleSubmitOrder}
      />
    </section>
  );
}
