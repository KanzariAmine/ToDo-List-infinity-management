import styled from "styled-components";

export const Container = styled.div`
  margin: 0 10px;
  padding: 0 20px;
  position: relative;
`;

export const Lable = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  display: block;
  border: 2px solid #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
  width: 100%;
  padding: 10px;
  outline-color: ${(props) => props.theme.COLORS.primary};
`;

export const Message = styled.p`
  color: ${(props) => props.theme.COLORS.error};
  font-size: 14px;
  margin: 10px;
`;
