import { useEffect } from "react";
import ReactDOM from "react-dom";
import { MdClear } from "react-icons/md";
import {
  WrapperContainer,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseModalButton,
} from "./Modal.styled";
const element = document.createElement("div");
const Modal = ({ children }) => {
  useEffect(() => {
    element.setAttribute("id", "modal_root");
    document.body.appendChild(element);

    return () => {
      document.body.removeChild(element);
    };
  }, []);
  return ReactDOM.createPortal(
    <WrapperContainer>
      <ModalContainer>{children}</ModalContainer>
    </WrapperContainer>,
    element
  );
};

Modal.Header = ({ children, onToggleModal }) => (
  <ModalHeader>
    {children}
    <CloseModalButton onClick={onToggleModal}>
      <MdClear />
    </CloseModalButton>
  </ModalHeader>
);

Modal.Body = ({ children }) => <ModalBody>{children}</ModalBody>;
Modal.Footer = ({ children }) => <ModalFooter>{children}</ModalFooter>;

export default Modal;
