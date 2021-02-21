import { MdEdit } from "react-icons/md";
import {
  Container,
  LeftPart,
  RightPart,
  StatusPart,
  UpdateButton,
} from "./Card.styled";
const Card = ({ title, description, status }) => {
  return (
    <Container>
      <LeftPart>
        <h3>{title}:</h3> <p>{description}</p>
        <a href="#"> Supprimer</a>
      </LeftPart>
      <RightPart>
        <UpdateButton>
          <MdEdit />
        </UpdateButton>
        <StatusPart>
          <p>{status}</p>
        </StatusPart>
      </RightPart>
    </Container>
  );
};

export default Card;
