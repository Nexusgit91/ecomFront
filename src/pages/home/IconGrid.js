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

  return (
    <Wrapper className="mt-5 container">
      <Row className="justify-content-center gy-2">
        <Col xs={6} md={3} className="text-center ">
          <Icon
            hovered={hovered}
            iconName="delivery"
            icon={<FaTruck size={80} />}
            text="Free & Fast Delivery"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Col>
        <Col xs={6} md={3} className="text-center ">
          <Icon
            hovered={hovered}
            iconName="payment"
            icon={<FaCreditCard size={80} />}
            text="Online Payment"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Col>
        <Col xs={6} md={3} className="text-center ">
          <Icon
            hovered={hovered}
            iconName="security"
            icon={<FaShieldAlt size={80} />}
            text="Secured Transaction"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Col>
        <Col xs={6} md={3} className="text-center ">
          <Icon
            hovered={hovered}
            iconName="offers"
            icon={<FaGift size={80} />}
            text="Daily Offers"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  @media screen and (max-width: 798px) {
    .icon {
      font-size: 2.1rem !important;
    }

    h4 {
      font-size: 1.1rem;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  ${(props) =>
    props.hovered === props.iconName &&
    `
      transform: scale(1.2);
    `}

  svg {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 798px) {
    svg {
      font-size: 2.4rem;
    }

    h4 {
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 500px) {
    svg {
      font-size: 2rem;
    }
  }
`;

const Icon = ({
  hovered,
  iconName,
  icon,
  text,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <IconWrapper
      hovered={hovered}
      iconName={iconName}
      onMouseEnter={() => onMouseEnter(iconName)}
      onMouseLeave={onMouseLeave}
    >
      {icon}
      <h4>{text}</h4>
    </IconWrapper>
  );
};

export default IconGrid;
