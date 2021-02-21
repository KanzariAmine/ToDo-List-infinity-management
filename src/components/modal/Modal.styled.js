import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0;
  background: rgba(0, 0, 0, 0.4);
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  width: 50%;
  height: ${(props) => props.position && "90%"};
  max-width: calc(100% - 80px);
  max-height: calc(100% - 80px);
  margin: 50px auto;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 14px;
  border-bottom: 1px solid #e5e5e5;
`;

export const ModalBody = styled.div`
  overflow: auto;
  padding: 20px 20px;
  height: calc(100% - 80px);
`;
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 30px;
  border-top: 1px solid #e5e5e5;
`;

export const CloseModalButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 25px;
  background-color: transparent;
  color: #ccc;
  & :hover {
    color: #dc3545;
  }
`;
