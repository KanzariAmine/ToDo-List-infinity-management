import { useContext, useState } from "react";
//Component
import InputText from "../../components/input/InputText";
import Button from "../../components/button/Button";
import ListTache from "../../pages/listTache/ListTache";
//Context
import { TacheContext } from "../../context/tacheContext";
import { AuthContext } from "../../context/authContext";
//Style
import { FormContainer, Form, GoBackButton } from "./Taches.styled";
import theme from "../../constants/theme";
//Hooks
import { useForm } from "../../hooks/useForm";
import { MdKeyboardBackspace } from "react-icons/md";
//Validation
import taskValidation from "../../validations/task.validation";
const Home = (props) => {
  const { state, dispatch } = useContext(TacheContext);
  const { stateAuth, dispatch: authDispatch } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [values, setValues, setHandleChange] = useForm({
    tacheName: "",
    tacheDescription: "",
  });

  //Add new Task
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { errors, isValid } = taskValidation(values);
    setErrors(errors);
    isValid && dispatch({ type: "ADD_TACHE", payload: values });
    setValues({ tacheName: "", tacheDescription: "" });
  };

  //Go to Home page
  const onGoBack = (evt) => {
    evt.preventDefault();
    authDispatch({
      type: "IS_AUTHENTICATED",
      payload: {
        email: "",
        password: "",
      },
    });
  };

  return (
    <>
      <GoBackButton onClick={onGoBack}>
        <MdKeyboardBackspace />
      </GoBackButton>
      <FormContainer>
        <h2 style={{ marginBottom: "15px", marginTop: "0" }}>
          Créer une nouvelle tache
        </h2>
        <Form onSubmit={handleSubmit}>
          <InputText
            title="Nom de la tache"
            placeholder="Entrer le nom de la tache..."
            name="tacheName"
            type="text"
            value={values.tacheName}
            onChange={setHandleChange}
            errors={errors.tacheName}
          />
          <InputText
            title="Description de la tache en une ligne"
            placeholder="Description..."
            name="tacheDescription"
            type="text"
            value={values.tacheDescription}
            onChange={setHandleChange}
            errors={errors.tacheDescription}
          />
          <Button
            title="Ajouter la tache"
            color={theme.COLORS.primary}
            size="small"
            style={{ marginTop: "20px" }}
          />
        </Form>
      </FormContainer>
      <ListTache />
    </>
  );
};

export default Home;
