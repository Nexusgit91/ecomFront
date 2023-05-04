import React, { useState } from "react";
import styled from "styled-components";

const DressForm = () => {
  const [user, setUser] = useState({
    s_id: "",
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: null,
    previewImage: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    const previewImage = URL.createObjectURL(image);
    setUser({ ...user, image, previewImage });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("s_id", user.s_id);
    formData.append("name", user.name);
    formData.append("description", user.description);
    formData.append("price", user.price);
    formData.append("quantity", user.quantity);
    formData.append("image", user.image);

    fetch("/users/dress", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // add any success/failure handling code here
        setUser({
          s_id: "",
          name: "",
          description: "",
          price: "",
          quantity: "",
          image: null,
          previewImage: null,
        });
      })
      .catch((error) => {
        console.error(error);
        // add any error handling code here
      });
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="dress-form"
        style={{ marginTop: "100px" }}
      >
        <div className="form-group">
          <label htmlFor="s_id">S_ID:</label>
          <input
            type="text"
            className="form-control"
            name="s_id"
            id="s_id"
            value={user.s_id}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            name="description"
            id="description"
            value={user.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="form-control"
            name="price"
            id="price"
            value={user.price}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            id="quantity"
            value={user.quantity}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              name="image"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <label className="custom-file-label" htmlFor="image">
              Choose file
            </label>
          </div>
          {user.previewImage && (
            <img
              src={user.previewImage}
              alt="preview"
              className="img-fluid mt-2"
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  Set font family and size body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  /* Center the form on the page */
  .dress-form {
    margin: 0 auto;
    max-width: 600px;
    padding: 20px;
  }

  /* Style form labels */
  label {
    display: block;
    font-weight: 700;
    margin-bottom: 5px;
  }

  /* Style form input fields */
  .form-control {
    border-radius: 0;
    border: 1px solid #ccc;
    display: block;
    font-size: 16px;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
  }

  /* Style the file input field */
  .custom-file-input {
    height: 40px;
    padding: 10px;
  }

  /* Style the submit button */
  button[type="submit"] {
    background-color: #4caf50;
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  button[type="submit"]:hover {
    background-color: #3e8e41;
  }
`;

export default DressForm;
