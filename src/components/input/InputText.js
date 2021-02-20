import React from "react";
import { Container, Lable, Input } from "./InputText.styled";
const InputText = ({ title, placeholder, value, onChange, name }) => {
  return (
    <Container>
      <Lable>{title}</Lable>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {/* <small>Error Message</small> */}
    </Container>
  );
};

export default InputText;
