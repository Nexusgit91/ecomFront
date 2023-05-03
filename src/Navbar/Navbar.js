import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

function Navibar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const history = useHistory();

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

  return (
    <Wrapper>
      <Navbar expand="md" className="fixed-top" style={{}}>
        <Navbar.Brand to="/">
          {" "}
          <h
            style={{
              marginLeft: "20px",
            }}
          >
            <font color="blue">N</font>
            <font color="green">e</font>
            <font color="red">x</font>
            <font color="black">o</font>
          </h>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
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
                  RegisterShops
                </NavDropdown.Item>
                <NavDropdown.Item to="/producttable">
                  ProductTable
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              ""
            )}

            {name ? (
              <NavLink className="nav-link" to="/profile">
                Your Orders
              </NavLink>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <>
                <NavLink>Hello, {name}</NavLink>
                <NavLink onClick={handleLogout}>Logout</NavLink>
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
        {/* <TypingAnimation /> */}
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
  .navbar {
    height: var(--nav-height);
    background-color: var(--white);
    color: black;
  }

  .nav-link {
    position: relative;
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      height: 0.15rem;
      width: 100%;
      bottom: 0.5rem;
      background: transparent;
      transition: var(--transition);
      left: 0;
    }

    &:hover,
    &:focus,
    &:active {
      color: var(--grey-500);

      &::before {
        background: var(--primary-500);
      }
    }
  }
`;

export default Navibar;
