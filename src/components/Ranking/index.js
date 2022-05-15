import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import RankPosition from "../RankPosition";
import TitleWithBorder from "../TitleWithBorder";

export default function Ranking(props) {
  const navigate = useNavigate();
  const users = props.data

  const Positions =
    users.map((user) => {
      return (
        <RankPosition onClick={() => navigate("/adicionar", {paramKey: user.id})} key={user.id} position={user.p} name={user.name} goals={user.goals} tasks={user.tasks}></RankPosition>
      );
    })

  return (
    <>
      <Container height="312px" width="380px" borderRadius="10px">
        <TitleWithBorder>Ranking</TitleWithBorder>
        <div style={{
          maxHeight: "26vh",
          overflow: "auto",
        }}>
          {Positions}
        </div>
      </Container>
    </>
  );
}

// const users = [
//   { id: 1, p: 1, name: "Bruno Ferreira", goals: 1, tasks:13},
//   { id: 2, p: 2, name: "Amanda", goals: 1, tasks:13 },
//   { id: 3, p: 3,  name: "Julia Mendes", goals: 1, tasks:13 },
//   { id: 4, p: 4,  name: "Lucas Alves", goals: 1, tasks:13 },
//   { id: 5, p: 5,  name: "Beatriz Santos", goals: 1, tasks:1 },
// ]

// chame no App.js dentro do return()
// <Ranking data={users}></Ranking>

// AINDA PRECISA ADICIONAR O TITULO NO TOPO!