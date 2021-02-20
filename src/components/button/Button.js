import React from "react";
import { Button } from "./Button.Styled";
const MyButton = ({ title, onToggleModal, color, size, ...rest }) => {
  return (
    <Button onClick={onToggleModal} color={color} size={size} {...rest}>
      {title}
    </Button>
  );
};

export default MyButton;
