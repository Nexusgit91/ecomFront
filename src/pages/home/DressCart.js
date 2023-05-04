import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { OrderForm } from "./OrderForm";
import styled from "styled-components";

const CartContainer = styled(Container)`
  margin-bottom: 20px;
`;

const CartTable = styled(Table)`
  margin-top: 30px;

  th {
    background-color: #f8f9fa;
    border: none;
    font-weight: 500;
  }

  tbody tr:nth-child(odd) {
    background-color: #f8f9fa;
  }

  tbody tr:hover {
    background-color: #f1f1f1;
  }
`;

const CartButton = styled(Button)`
  background-color: #dc3545;
  border: none;

  &:hover {
    background-color: #c82333;
  }
`;

const NoticeContainer = styled.div`
  margin-top: 30px;
  font-style: italic;
  color: black;
  font-size: 16px;
  background-color: yellow;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
`;

function DressCart({ cartItems, handleRemoveFromCart, handleClearCart }) {
  const userEmail = window.sessionStorage.getItem("email");

  const [orderFormData, setOrderFormData] = useState({
    name: "",
    email: userEmail,
    address: "",
    totalPrice: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();

    if (!userEmail) {
      const modal = document.createElement("div");
      modal.style =
        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 999;";
      modal.innerHTML =
        "<h1 style='color: white;'>Please login to submit the order.</h1><button style='margin-top: 20px; background-color: white; color: black; border: none; padding: 10px 20px; font-size: 16px; cursor: pointer;'>Login</button>";
      document.body.appendChild(modal);

      const loginButton = modal.querySelector("button");
      loginButton.addEventListener("click", () => {
        window.location.href = "/login";
      });

      return;
    }

    const orderData = { ...orderFormData, cartItems };

    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        // Order submitted successfully
        console.log("Order submitted successfully");

        // Clear cart and order form data
        setOrderFormData({ name: "", email: "", address: "" });

        // Clear cart items
        handleClearCart();

        // Store the total price in a session cookie
        window.sessionStorage.setItem("totalPrice", totalPrice.toFixed(2));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 0.9,
    0
  );

  return (
    <>
      <CartContainer>
        <CartTable hover responsive>
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th className="d-none d-sm-table-cell">Name</th>
              <th className="d-none d-sm-table-cell">Size</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={item.images[0]} alt={item.name} height="50px" />
                </td>
                <td className="d-none d-sm-table-cell">{item.name}</td>
                <td className="d-none d-sm-table-cell">{item.size}</td>
                <td>${(item.price * 0.9).toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>
                  <CartButton
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </CartButton>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}>
                <strong>Total:</strong>
              </td>
              <td colSpan={3}>${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </CartTable>

        <OrderForm
          handleSubmitOrder={handleSubmitOrder}
          handleInputChange={handleInputChange}
          orderFormData={orderFormData}
          totalPrice={totalPrice}
        />
      </CartContainer>

      <NoticeContainer>
        <p>
          <strong>Notice:</strong> The name of the product contains <b>s_id</b>,
          which stands for <b>shop_id</b>. It is related to the shop owners and
          not to the customers, so please ignore it.
        </p>
        <p>
          <strong>Require login:</strong> You need to be logged in to submit the
          order.
        </p>
        <p>
          <strong>Payment:</strong> Only cash on delivery is accepted.
        </p>
        <p>
          <strong>Delivery:</strong> Ordered items will be delivered within 48
          hours.
        </p>
      </NoticeContainer>
    </>
  );
}

export default DressCart;
