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
