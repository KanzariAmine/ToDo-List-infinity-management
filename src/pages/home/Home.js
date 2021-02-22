import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
// Component
import InputText from "../../components/input/InputText";
import Button from "../../components/button/Button";
// Style
import { Container, Form, Message } from "./Home.styled";
import theme from "../../constants/theme";
// Hooks
import { useForm } from "../../hooks/useForm";
//Context
import { AuthContext } from "../../context/authContext";
//Validation
import userValidation from "../../validations/user.validation";
const Register = (props) => {
  const referer = props.location.state.referer || "/taches";
  const { state, dispatch } = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState("");
  const [values, setValues, setHandleChange] = useForm({
    email: "",
    password: "",
  });

  // Check if the user all ready exist
  // If not, display message user not found and check every field
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch({ type: "IS_AUTHENTICATED", payload: values });
    setValues({
      email: "",
      password: "",
    });
    const { errors, isValid } = userValidation(values);
    setErrors(errors);
    setIsValid(isValid);
  };

  // Redirect to Taches page if State is true
  if (state) {
    return <Redirect to={referer} />;
  }
  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <InputText
            title="Adresse e-mail"
            placeholder="Entrer Adresse e-mail..."
            name="email"
            type="text"
            value={values.email}
            onChange={setHandleChange}
            style={{ padding: "10px 0" }}
            errors={errors.email}
          />
          <InputText
            title="Mote de Passe"
            placeholder="Entrer le mot de passe"
            name="password"
            type="password"
            value={values.password}
            onChange={setHandleChange}
            style={{ padding: "10px 0" }}
            errors={errors.password}
          />
          <Button
            title="Soumettre"
            color={theme.COLORS.primary}
            size="small"
            style={{ marginTop: "20px", width: "100%" }}
          />
        </Form>
        {isValid && <Message>User Not Found</Message>}
      </Container>
    </>
  );
};

export default Register;
