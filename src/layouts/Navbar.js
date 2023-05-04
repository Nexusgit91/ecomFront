import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navibar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
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

  return (
    <Wrapper>
      <Navbar expand="md" className="mb-0">
        <NavLink className="navbar-brand" to="/">
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
        </NavLink>
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
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 0;
  margin-bottom: 30px;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  color: #555;
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 0;
}

.navbar-collapse{
  justify-content: center;
}

.navbar-nav {
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #555;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 10px 15px;
  margin: 0 10px;
  border-radius: 2px;
  transition: all 0.2s ease-in-out;
  
}

.nav-link:hover,
.nav-link:focus {
  /* background-color: #bfb2de; */

  color: var(#bfb2de);



}

.navbar-toggler {
  border-color: transparent;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.dropdown-menu {
  border-radius: 0;
}

.dropdown-item {
  font-size: 16px;
  font-weight: 500;
  color: #555;
  padding: 8px 15px;
  margin: 0;
  transition: all 0.2s ease-in-out;
}

.dropdown-item:hover,
.dropdown-item:focus {
  color: #ffffff;
  background-color: #555;
}

.dropdown-divider {
  margin: 0;
}

@media (max-width: 767px) {
  .navbar-collapse {
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
  }

  .navbar-nav {
    margin: 0;
    padding: 0;
  }

  .nav-link {
    display: block;
    margin: 0;
    border-radius: 0;
    text-align: center;
    transition: all 0.2s ease-in-out;
  }

  .nav-link:hover,
  .nav-link:focus {
    color: #555;
    background-color: #ffffff;
  }
}

/* CSS */
.navbar {
  height: 80px;
  background-color: transparent;
  transition: background-color 0.5s ease-in-out;
}

.navbar:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.navbar-brand {
  font-size: 30px;
  font-weight: bold;
  color: #333;
  transition: color 0.5s ease-in-out;
}

.navbar-brand:hover {
  color: #007bff;
}

.navbar-nav .nav-link {
  font-size: 19px;
  color: #392929;
  transition: color 0.5s ease-in-out;
}

.navbar-nav .nav-link:hover {
  /* color: #007bff; */
  /* animation: shake 0.5s; */
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}


  .navbar {
    height: var(--nav-height);
    background-color: var(--white);
    color: black;
    position: relative;
    z-index: 100;
  }

  .nav-link {
    position: relative;
    display: inline-block;
    font-weight: 400;
    width: auto;
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

  .navbar-toggle {
  }

  .navbar-toggler:focus {
    box-shadow: none;
  }

  @media screen and (max-width: 768px) {
    .nav-toggle-icon {
      height: 1rem;
      width: 1rem;
    }

    .navbar-nav {
      display: grid;
      justify-content: center;
    }
  }
`;

export default Navibar;
