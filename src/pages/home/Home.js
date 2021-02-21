import { useContext } from "react";
import InputText from "../../components/input/InputText";
import Button from "../../components/button/Button";
import theme from "../../constants/theme";
//Context
import { TacheContext } from "../../context/tacheContext";
//Style
import { FormContainer, Form } from "./Home.styled";
//Hooks
import { useForm } from "../../hooks/useForm";

const Home = (props) => {
  const [values, setValues, setHandleChange] = useForm({
    tacheName: "",
    tacheDescription: "",
  });

  const { state, dispatch } = useContext(TacheContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "ADD_TACHE", payload: values });
    setValues({ tacheName: "", tacheDescription: "" });
  };

  return (
    <FormContainer>
      <h2 style={{ marginBottom: "15px", marginTop: "0" }}>
        Créer une nouvelle tache
      </h2>
      <Form onSubmit={handleSubmit}>
        <InputText
          title="Nom de la tache"
          placeholder="Enter le nom de la tache..."
          name="tacheName"
          value={values.tacheName}
          onChange={setHandleChange}
        />
        <InputText
          title="Description de la tache en une ligne"
          placeholder="Description..."
          name="tacheDescription"
          value={values.tacheDescription}
          onChange={setHandleChange}
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
