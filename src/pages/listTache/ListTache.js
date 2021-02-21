import { useState, useContext } from "react";
//Component
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";
import Button from "../../components/button/Button";
import InputText from "../../components/input/InputText";
import { Container } from "./ListTache.styled";
//Style
import theme from "../../constants/theme";
//Context
import { TacheContext } from "../../context/tacheContext";
//Hooks
import { useForm } from "../../hooks/useForm";
const data = [
  {
    id: 1,
    tacheName: "TestOne",
    tacheDescription: "Lorem Ipsum is simply dummy text of the printing",
    status: "Non complétée",
  },
  {
    id: 2,
    tacheName: "TestTwo",
    tacheDescription: "Lorem Ipsum is simply dummy text of the printing",
    status: "Complétée",
  },
];
const ListTache = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTache, setCurrentTache] = useState({});
  const { state, dispatch } = useContext(TacheContext);

  const [values, setValues, setHandleChange] = useForm({
    tacheName: "",
    tacheDescription: "",
  });

  const onToggleModal = (id) => {
    let tache = state.filter((tache) => tache.id === id);
    setValues(tache[0]);
    setShowModal(!showModal);
  };

  const onDeleteTache = (id) => {
    dispatch({
      type: "REMOVE_TACHE",
      payload: id,
    });
  };

  const onUpdateTache = (evt) => {
    evt.preventDefault();
    dispatch({ type: "UPDATE_TACHE", payload: values });
    setShowModal(!showModal);
  };
  return (
    <>
      <Container>
        <h2>Liste des Tache</h2>
        {state.map((item) => (
          <Card
            key={item.id}
            title={item.tacheName}
            description={item.tacheDescription}
            status={item.status}
            onToggleModal={onToggleModal}
            onDeleteTache={onDeleteTache}
            id={item.id}
          />
        ))}
      </Container>
      {showModal && (
        <Modal>
          <Modal.Header onToggleModal={onToggleModal}>
            <h2>Modifier Tache</h2>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Button
              title="Modifier Tache"
              color={theme.COLORS.primary}
              size="small"
              style={{ marginTop: "20px", marginRight: "10px" }}
              onClick={onUpdateTache}
            />
            <Button
              title="Retoure"
              color={theme.COLORS.secondary}
              size="small"
              style={{ marginTop: "20px" }}
              onClick={onToggleModal}
            />
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ListTache;
