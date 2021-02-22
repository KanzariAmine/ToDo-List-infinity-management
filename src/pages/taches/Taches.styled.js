import styled from "styled-components";

export const FormContainer = styled.div`
  position: absolute;
  width: 50%;
  left: 0;
  right: 0;
  top: 100px;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const GoBackButton = styled.button`
  position: absolute;
  top: 100px;
  left: 40px;
  padding: 20px;
  border: none;
  outline: none;
  font-size: 30px;
  border-radius: 10px;
  cursor: pointer;
`;
