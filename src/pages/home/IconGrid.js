import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaTruck, FaCreditCard, FaShieldAlt, FaGift } from "react-icons/fa";
import styled from "styled-components";

const IconGrid = () => {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (iconName) => {
    setHovered(iconName);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const iconStyle = {
    fontSize: "3rem",
    transition: "transform 0.2s ease-in-out",
  };

  const iconHoveredStyle = {
    transform: "scale(1.2)",
  };

  return (
    <Wrapper className="mt-5 container">
      <Row className="justify-content-center gy-2">
        <Col xs={6} md={3} className="text-center ">
          <FaTruck
            className="mb-3 icon"
            style={
              hovered === "delivery"
                ? { ...iconStyle, ...iconHoveredStyle }
                : iconStyle
            }
            onMouseEnter={() => handleMouseEnter("delivery")}
            onMouseLeave={() => handleMouseLeave()}
          />
          <h4> Free & Fast Delivery</h4>
        </Col>
        <Col xs={6} md={3} className="text-center ">
          <FaCreditCard
            className="mb-3 icon"
            style={
              hovered === "payment"
                ? { ...iconStyle, ...iconHoveredStyle }
                : iconStyle
            }
            onMouseEnter={() => handleMouseEnter("payment")}
            onMouseLeave={() => handleMouseLeave()}
          />
          <h4>Online Payment</h4>
        </Col>
        <Col xs={6} md={3} className="text-center ">
          <FaShieldAlt
            className="mb-3 icon"
            style={
              hovered === "security"
                ? { ...iconStyle, ...iconHoveredStyle }
                : iconStyle
            }
            onMouseEnter={() => handleMouseEnter("security")}
            onMouseLeave={() => handleMouseLeave()}
          />
          <h4>Secured Transaction</h4>
        </Col>
        <Col xs={6} md={3} className="text-center ">
          <FaGift
            className="mb-3 icon"
            style={
              hovered === "offers"
                ? { ...iconStyle, ...iconHoveredStyle }
                : iconStyle
            }
            onMouseEnter={() => handleMouseEnter("offers")}
            onMouseLeave={() => handleMouseLeave()}
          />
          <h4>Daily Offers</h4>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .icon {
    font-size: 2.4rem !important;
  }

  @media screen and (max-width: 798px) {
    .icon {
      font-size: 2.1rem !important;
    }

    h4 {
      font-size: 1.1rem;
    }
  }
  @media screen and (max-width: 500px) {
    .icon {
    }
  }
`;

export default IconGrid;
