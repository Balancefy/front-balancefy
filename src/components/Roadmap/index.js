import Container from "../Container";
import RoadmapGoal from "../RoadmapGoal";
import TitleWithBorder from "../TitleWithBorder";

export default function Roadmap(props) {
  const data = props.data
  let Tasks;

  if (data !== undefined) {
    Tasks = data.tasks.map((goal) => {
      return (
        <RoadmapGoal
          key={goal.ordem}
          desc={goal.descricao}
          xp={goal.pontuacao}>
        </RoadmapGoal>
      );
    })
  }

  return (
    <>
      <Container height="60vh" width="380px" borderRadius="10px" style={{ paddingTop: "5px" }}>
        <TitleWithBorder>Roadmap</TitleWithBorder>
        <div style={{ heigth: "80%", overflow: "auto", maxHeight: "80%", marginTop: "25px", marginRight: "5px" }}>
          {data !== undefined ? <>
            <RoadmapGoal
              key={data.objetivo.id}
              desc={data.objetivo.categoria}
              xp={data.objetivo.pontuacao}
              goal>
            </RoadmapGoal>
            {Tasks}</> : <> </>
          }
        </div>

      </Container>
    </>
  );
}