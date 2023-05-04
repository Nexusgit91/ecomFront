import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

const ProductModal = ({ show, onHide, product, handleAddToCart }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{product?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={product?.imgSrc} fluid />
        <p>{product?.description}</p>
        <p>Price: {product?.price}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="success" onClick={() => handleAddToCart(product)}>
          Add to Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
