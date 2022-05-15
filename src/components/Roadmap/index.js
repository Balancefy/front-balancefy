import Container from "../Container";
import RoadmapGoal from "../RoadmapGoal";
import TitleWithBorder from "../TitleWithBorder";

export default function Roadmap(props) {
  const data = props.data

  const Tasks = data.tasks.map((goal) => {
    return (
      <RoadmapGoal
        key={goal.id}
        desc={goal.desc}
        xp={goal.xp}>
      </RoadmapGoal>
    );
  })

  return (
    <>
      <Container height="55vh" width="380px" borderRadius="10px" style={{ paddingTop: "5px"}}>
        <TitleWithBorder>Roadmap</TitleWithBorder>
        <div style={{heigth:"80%", overflow: "auto", maxHeight:"80%", marginTop:"25px", marginRight:"5px"}}>
          <RoadmapGoal
            key={data.objetivo.id}
            desc={data.objetivo.desc}
            xp={data.objetivo.xp}
            goal>
          </RoadmapGoal>
          {Tasks}
        </div>

      </Container>
    </>
  );
}