import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";

const ProductCardWrapper = styled(Card)`
  border: 1px solid #e2e2e2;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

const ProductImage = styled(Card.Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProductTitle = styled(Card.Title)`
  text-align: center;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ViewDetailsButton = styled(Button)`
  background-color: #007bff;
  border-color: #007bff;
  margin-right: 10px;

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }
`;

const AddToCartButton = styled(Button)`
  background-color: #dc3545;
  border-color: #dc3545;

  &:hover {
    background-color: #c82333;
    border-color: #bd2130;
  }
`;

const ProductCard = ({ product, setSelectedProduct, handleAddToCart }) => {
  return (
    <Col md={4} key={product.id} className="heading-container">
      <ProductCardWrapper>
        <ProductImageWrapper>
          <ProductImage variant="top" src={product.imgSrc} />
        </ProductImageWrapper>
        <Card.Body className="d-flex flex-column align-items-center">
          <ProductTitle>${product.price}</ProductTitle>
          <ProductTitle>{product.name}</ProductTitle>
          <ButtonContainer>
            <ViewDetailsButton
              variant="primary"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </ViewDetailsButton>{" "}
            <AddToCartButton
              variant="danger"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </AddToCartButton>
          </ButtonContainer>
        </Card.Body>
      </ProductCardWrapper>
    </Col>
  );
};

export default ProductCard;
