import styled from "styled-components";

export const Button = styled.button`
  display: block;
  width: ${({ size }) => buttonSize(size)};
  background-color: ${({ color }) => color};
  border: 2px solid ${({ color }) => color};
  border-radius: 4px;
  color: #eee;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const buttonSize = (size) => {
  switch (size) {
    case "small":
      return "20%";
    case "large":
      return "50%";
    default:
      return "100%";
  }
};
