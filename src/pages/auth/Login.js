import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const Navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      // Login successful, redirect to profile page
      const data = await response.json();
      window.sessionStorage.setItem("email", email); // store email in session storage
      window.location.replace("/");
      // alert("user logged in");
    } else {
      alert("Invalid email or password");
      // Login failed, display error message
      const data = await response.json();
    }
  };

  const signUpHandler = () => {
   Navigate("/signup");
  };

  return (

    <Wrapper className=" d-flex justify-content-center align-items-center">
      <Form
        onSubmit={handleSubmit}
        className="form border p-4 rounded"
        style={{
          marginTop: "100px",
          width: "90%",
          maxWidth: "500px",
          border: "2px solid black",
        }}
      >
        <h3 className="text-center mb-4">Login</h3>

        <Form.Group className="mb-3">
          <Form.Label className="d-flex align-items-center">Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="d-flex align-items-center">
            Password:
            <Button
              variant="link"
              onClick={handleTogglePassword}
              className="ms-auto"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </Button>
          </Form.Label>
          <Form.Control
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Login
        </Button>
        <p className="mt-3">
          Don't have an account? <Button onClick={signUpHandler}>Signup</Button>
        </p>
        <p className="mt-3">
          Forgot your password? <Link to="/forgot-password">Reset it here</Link>
        </p>
      </Form>
    </Wrapper>
  );
}

const Wrapper= styled.section`
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.login-form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form input {
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-form button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-form button:hover {
  background-color: #0069d9;
}

.login-form .error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}

.login-form .success-message {
  color: #28a745;
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
}
`

export default Login;
