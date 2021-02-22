import React from "react";
import { Container, Lable, Input, Message } from "./InputText.styled";
const InputText = ({
  title,
  placeholder,
  value,
  onChange,
  name,
  type,
  errors,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Lable>{title}</Lable>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      {errors && <Message>{errors}</Message>}
    </Container>
  );
};

export default InputText;
