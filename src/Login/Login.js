import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    window.location.replace("/signup");
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
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
        <h3 className="text-center mb-5">Login</h3>

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
    </div>
  );
}

export default Login;
