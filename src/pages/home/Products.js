import React from "react";
import { Row, Col, Button, Card, Form, Modal, Table } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

const ProductCard = styled(Card)`
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  background-color: white;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled(Card.Img)`
  height: 100%;
  object-fit: cover;
`;

const Products = ({
  products,
  setSelectedSize,
  setSelectedProduct,
  handleAddToCart,
  selectedSize,
}) => {
  return (
    <Wrapper>
      <Row sm={1} md={2} lg={3} className="products gy-4 f-c">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard className="card border-0 shadow-sm px-3 pt-2 p3-4">
              <div className="discount f-c flex-column">
                <div className="discount-value ">10%</div>
                <span className="discount-off">OFF</span>
              </div>
              <ProductImage variant="top" src={product.images[0]} />

              <Card.Body>
                <div>
                  <div className="price mb-3">
                    <span className="prev-price text-decoration-line-through me-2 text-muted">
                      ${product.price}
                    </span>
                    <span className="new-price fs-2">
                      ${(product.price * 0.9).toFixed(2)}
                    </span>

                    <Form>
                      <Form.Group controlId="formSize">
                        <div>
                          <Form.Control
                            as="select"
                            onChange={(e) => setSelectedSize(e.target.value)}
                          >
                            <option value=""> Size</option>
                            {product.sizes.map((size) => (
                              <option value={size} key={size}>
                                {size}
                              </option>
                            ))}
                          </Form.Control>
                        </div>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
                <Card.Title className="mb-3">{product.name}</Card.Title>

                <div className="btn-container d-block  d-sm-flex gap-2 f-c">
                  <Button
                    variant="primary"
                    className="btn-block mb-2 mb-sm-0"
                    onClick={() => setSelectedProduct(product)}
                  >
                    View Details
                  </Button>
                  <Button
                    variant="danger"
                    className="btn-block"
                    onClick={() => handleAddToCart(product, selectedSize)}
                    disabled={product.quantity >= 5} // maximum allowed quantity is 5
                  >
                    {product.quantity >= 5 ? "Out of Stock" : "Add to Cart"}
                  </Button>
                </div>
              </Card.Body>
            </ProductCard>
          </div>
        ))}
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .discount {
    background: var(--secondary-500);
    color: var(--white);
    height: 4rem;
    width: 4rem;
    font-size: 0.8rem;

    border-radius: 50%;

    &-value {
      margin-bottom: -0.4rem;
      font-size: 1.3rem;
    }
    &-off {
    }
  }

  .prev-price {
  }
`;

export default Products;
