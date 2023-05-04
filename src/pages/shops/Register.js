import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import styled from "styled-components";

function Register() {
  const initialFormData = {
    s_id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/saveData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setFormData(initialFormData);
        setErrorMsg("");
      } else if (response.status === 409) {
        setErrorMsg("Shop already registered");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Wrapper className="form-containerss" style={{ marginTop: "100px" }}>
      <h1 className="form-title" style={{ fontSize: "40px" }}>
        Shop Registration Form
      </h1>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="s_id" className="form-groupss">
          <Form.Label>Shop_id</Form.Label>
          <Form.Control
            type="text"
            name="s_id"
            value={formData.s_id}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="name" className="form-groupss">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email" className="form-groupss">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone" className="form-groupss">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="address" className="form-groupss">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btns">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .form-containerss {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-groupss {
    margin-bottom: 20px;
  }

  .form-groupss label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-groupss input,
  .form-groupss select,
  .form-groupss textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  .form-groupss select {
    height: 40px;
  }

  .btns {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .btns:hover {
    background-color: #0069d9;
  }

  .error {
    color: red;
    margin-top: 5px;
  }
`;

export default Register;
