import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
`;
export const Form = styled.form`creae
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

export const Message = styled.p`
  color: ${(props) => props.theme.COLORS.error};
  font-size: 14px;
  margin: 10px;
  font-weight: bold;
  background-color: #dc354530;
  padding: 10px;
  width: 100%;
  text-align: center;
`;
