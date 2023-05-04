import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export const OrderForm = ({
  handleSubmitOrder,
  handleInputChange,
  orderFormData,
  totalPrice,
}) => {
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmitOrder}>
        <Title>Order Form</Title>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input
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
            type="text"
            id="address"
            name="address"
            value={orderFormData.address}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup mb={3}>
          <Label htmlFor="totalCost">Total Cost:</Label>
          <CostInput
            type="text"
            id="totalCost"
            name="totalCost"
            value={`Rs${totalPrice.toFixed(2)}+ 0 delivery charges`}
            readOnly
          />
        </FormGroup>
        <SubmitButton type="submit">Submit Order</SubmitButton>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  width: 80%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "20px")};
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const CostInput = styled(Input)`
  font-weight: bold;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  font-size: 16px;
`;
