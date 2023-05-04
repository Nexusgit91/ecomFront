import { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../Css/Cart.css";
import styled from "styled-components";
import "../ProductList.css";
import OrderForm from "./OrderForm";
function ElectronicCart({ cartItems, handleRemoveFromCart, handleClearCart }) {
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
        // You may also want to update the cart items in the parent component
        // Clear cart items
        handleClearCart();
        // Store the total price in a session cookie
        window.sessionStorage.setItem("totalPrice", totalPrice.toFixed(2));
        window.location.replace("/profile");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <>
      <Container style={{ marginBottom: "20px" }}>
        <Table className="my-5" style={{ width: "450px" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={item.id} className="heading-container">
                <td>{index + 1}</td>
                <td>
                  <img src={item.imgSrc} alt={item.name} height="50px" />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>{item.quantity}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={4}></td>
              <td>
                <strong>Total:</strong>
              </td>
              <td>${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </Table>
        <h3>Order Form</h3>

        <OrderForm
          handleSubmitOrder={handleSubmitOrder}
          handleInputChange={handleInputChange}
          orderFormData={orderFormData}
          totalPrice={totalPrice}
        />
      </Container>

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
const NoticeContainer = styled.div`
  font-style: italic;
  color: black;
  font-size: 16px;
  background-color: yellow;
  border-radius: 10px;
  width: 400px;
  margin: 50px auto;
  padding: 20px;
`;

export default ElectronicCart;
