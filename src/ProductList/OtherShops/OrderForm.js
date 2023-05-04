import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const OrderFormWrapper = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TotalCostLabel = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #007bff;
  border: none;

  &:hover {
    background-color: #0069d9;
  }
`;

function OrderForm({
  handleSubmitOrder,
  handleInputChange,
  orderFormData,
  totalPrice,
}) {
  return (
    <OrderFormWrapper onSubmit={handleSubmitOrder}>
      <FormGroup>
        <Label htmlFor="name">Name:</Label>
        <Input
          className="form-control"
          type="text"
          id="name"
          name="name"
          value={orderFormData.name}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          className="form-control"
          type="email"
          id="email"
          name="email"
          value={orderFormData.email}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="address">Address:</Label>
        <Input
          className="form-control"
          type="text"
          id="address"
          name="address"
          value={orderFormData.address}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <TotalCostLabel htmlFor="totalCost">
          Total Cost: Rs{totalPrice.toFixed(2)} + 0 delivery charges
        </TotalCostLabel>
        <Input
          className="form-control"
          type="text"
          id="totalCost"
          name="totalCost"
          value={totalPrice}
          readOnly
        />
      </FormGroup>
      <SubmitButton type="submit">Submit Order</SubmitButton>
    </OrderFormWrapper>
  );
}

export default OrderForm;
