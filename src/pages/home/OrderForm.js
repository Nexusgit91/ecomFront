import React from "react";
import { Button } from "react-bootstrap";

export function OrderForm({
  handleSubmitOrder,
  handleInputChange,
  orderFormData,
  totalPrice,
}) {
  return (
    <div>
      <form className="form" onSubmit={handleSubmitOrder}>
        <h3>Order Form</h3>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="form-control"
            type="text"
            id="name"
            name="name"
            value={orderFormData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            id="email"
            name="email"
            value={orderFormData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            className="form-control"
            type="text"
            id="address"
            name="address"
            value={orderFormData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="totalCost">
            Total Cost :Rs{totalPrice.toFixed(2)}+ 0 delivery charges
          </label>
          <input
            className="form-control"
            type="text"
            id="totalCost"
            name="totalCost"
            value={totalPrice.toFixed(2)}
            readOnly
          />
        </div>
        <Button type="submit" className="btn btn-primary btn-block">
          Submit Order
        </Button>
      </form>
    </div>
  );
}
