import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

import ElectronicCart from "./ElectronicCart";
import IconGrid from "../../pages/home/IconGrid";
import VideoBanner from "../../pages/home/VideoBanner";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard";
import { products } from "../Datajson/electronicsProducts";

function Electronics() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const keywords = searchQuery.toLowerCase().split(" ");
  const [orderFormData, setOrderFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [dateTime, setDateTime] = useState("");

  const handleClearCart = () => {
    setCartItems([]);
  };

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    let matchCount = 0;
    for (const keyword of keywords) {
      if (productName.includes(keyword)) {
        matchCount++;
      }
    }
    return matchCount >= Math.ceil(keywords.length / 2);
  });

  const handleAddToCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) {
      const newCartItems = [...cartItems];
      newCartItems[index].quantity += 1;
      setCartItems(newCartItems);
    } else {
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index > -1) {
      const newCartItems = [...cartItems];
      if (newCartItems[index].quantity > 1) {
        newCartItems[index].quantity -= 1;
      } else {
        newCartItems.splice(index, 1);
      }
      setCartItems(newCartItems);
    }
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    const orderData = {
      ...orderFormData,
      cartItems,
      dateTime: new Date().toLocaleString(),
    };
    try {
      const response = await axios.post("/api/orders", orderData, {
        headers: { "Content-Type": "application/json" },
      });
      if (response.status === 200) {
        console.log("Order submitted successfully");
        setCartItems([]);
        setOrderFormData({ name: "", email: "", address: "" });
      } else {
        console.log("Failed to submit order");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <VideoBanner videoName={"m1pro"} />
      <IconGrid />
      <Container>
        <Row className="mb-3" style={{ marginTop: "60px" }}>
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Control
              type="text"
              placeholder="Search by name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ marginBottom: "25px", width: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <Row>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  setSelectedProduct={setSelectedProduct}
                  handleAddToCart={handleAddToCart}
                />
              ))}
            </Row>
          </Col>

          <Col md={4}>
            <h1 style={{ textAlign: "center", fontSize: "60px" }}>Cart</h1>

            <ElectronicCart
              handleClearCart={handleClearCart}
              cartItems={cartItems}
              handleRemoveFromCart={handleRemoveFromCart}
              orderFormData={orderFormData}
              setOrderFormData={setOrderFormData}
              handleSubmitOrder={handleSubmitOrder}
            />
          </Col>
        </Row>

        <ProductModal
          show={selectedProduct !== null}
          onHide={() => setSelectedProduct(null)}
          product={selectedProduct}
          handleAddToCart={handleAddToCart}
        />
      </Container>
    </>
  );
}

export default Electronics;
