import styled from "styled-components";
import theme from "../../constants/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  // margin-top: 200px;
  width: 66rem;
  max-width: 95%;
  box-shadow: rgb(60 64 67 / 30%) 0px 1px 2px 0px,
    rgb(60 64 67 / 15%) 0px 1px 3px 1px;
  border-radius: 5px;
`;
export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  flex: 0.9;
  & h3 {
    padding-right: 10px;
  }
  & a {
    padding-left: 20px;
  }
`;

export const RightPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 0.2;
`;

export const StatusPart = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.children.props.children === "Complétée"
      ? theme.COLORS.success
      : theme.COLORS.error};
  color: #fff;
  padding: 8px;
  border-radius: 5px;
  height: 35px;
`;

export const UpdateButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 25px;
  background-color: #fff;
  color: ${(props) => theme.COLORS.primary};
  cursor: pointer;
  border: none;
`;
