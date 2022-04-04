import Container from "../Container";
import RankPosition from "../RankPosition";

export default function Ranking(props) {
  const users = props.data

  const Positions =
    users.map((user) => {
      return (
        <RankPosition key={user.id} position={user.p} name={user.name} goals={user.goals} tasks={user.tasks}></RankPosition>
      );
    })

  return (
    <>
      <Container height="372px" width="380px" borderRadius="10px">
        <h3 style={{textAlign: "center", marginTop: "5px"}}>
          Ranking
        </h3>
          {Positions}
      </Container>
    </>
  );
}

// Importe Ranking  

// Antes do return coloque esse vetor:
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