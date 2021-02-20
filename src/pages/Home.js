import { useState } from "react";
import InputText from "../components/input/InputText";
import Button from "../components/button/Button";
import theme from "../constants/theme";
import { FormContainer, Form } from "./Home.styled";
const Home = (props) => {
  const [state, setState] = useState("");

  const handelChange = (evt) => {
    evt.preventDefault();
    setState(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    console.log(state);
  };
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputText
          title="Nom de la tache"
          placeholder="Enter le nom de la tache..."
          name="tacheName"
          value={state}
          onChange={handelChange}
        />
        <InputText
          title="Description de la tache en une ligne"
          placeholder="Description..."
          name="tacheDescription"
          value={state}
          onChange={handelChange}
        />
        <Button
          title="Ajouter la tache"
          color={theme.COLORS.primary}
          size="small"
          style={{ marginTop: "20px" }}
        />
      </Form>
    </FormContainer>
  );
};

export default Home;
