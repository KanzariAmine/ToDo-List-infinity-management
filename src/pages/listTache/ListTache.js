import Card from "../../components/card/Card";
import { Container } from "./ListTache.styled";
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
  return (
    <Container>
      <h2>Liste des Tache</h2>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.tacheName}
          description={item.tacheDescription}
          status={item.status}
        />
      ))}
    </Container>
  );
};

export default ListTache;
