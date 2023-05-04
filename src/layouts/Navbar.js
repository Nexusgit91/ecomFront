import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Nav.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navibar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [cartCount, setCartCount] = useState(0); // new state variable for cart count
  const Navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const response = await fetch("/api/checkLoggedIn");
        if (response.ok) {
          const data = await response.json();
          setIsLoggedIn(true);
          setName(data.name);
        }
      } catch (error) {
        console.error(error);
      }
    };
    checkLoggedIn();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsLoggedIn(false);
        // on logout
        window.sessionStorage.clear();

        window.location.replace("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCartClick = () => {
    // handle cart click event
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <Wrapper>
      <Navbar
        expand="md"
        className="mb-0 fixed-top"
        style={{ fontSize: "21px" }}
      >
        <NavLink className="navbar-brand" to="/">
          <h style={{ marginLeft: "20px" }}>
            <font color="blue">N</font>
            <font color="green">e</font>
            <font color="red">x</font>
            <font color="black">o</font>
          </h>
        </NavLink>
        <div className=" d-md-none">
          <CartButton onClick={handleCartClick}>
            <FontAwesomeIcon icon={faShoppingCart} />
            <CartCount
              style={{ width: "25px", height: "30px", fontSize: "20px" }}
            >
              i
            </CartCount>
          </CartButton>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ml-auto" style={{ fontWeight: "bold" }}>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/books">
              Books
            </NavLink>
            <NavLink className="nav-link" to="/electronics">
              Electronics
            </NavLink>
            {name === "nexo 91" ? (
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavDropdown.Item to="/orderList">Orders</NavDropdown.Item>
                <NavDropdown.Item to="/register">Register</NavDropdown.Item>
                <NavDropdown.Item to="/shopowner">
                  Register Shops
                </NavDropdown.Item>
                <NavDropdown.Item to="/producttable">
                  Product Table
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <>
                <NavLink className="nav-link" to="/profile">
                  Your Orders
                </NavLink>
                <NavLink onClick={handleLogout} className="nav-link">
                  Logout
                </NavLink>
                <NavLink className="nav-link" to="#">
                  Hello, {name}
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

        <h
          className="market d-none d-md-block"
          style={{
            fontSize: "20px",
            marginRight: "25px",
            color: "#394639",
            fontWeight: "bold",
          }}
        >
          SadarBazar Market
        </h>
      </Navbar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* styles for Navbar */
`;

const CartButton = styled.button`
  position: relative;
  display: inline-block;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  color: #555;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--primary-500);
  }

  svg {
    margin-right: 5px;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;

  display: inline-block;
  background-color: var(--primary-500);
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  padding: 0.25rem;
  border-radius: 50%;
`;

export default Navibar;
