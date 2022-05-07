import Container from "../Container";
import RoadmapGoal from "../RoadmapGoal";
import TitleWithBorder from "../TitleWithBorder";

export default function Roadmap(props) {
  const goals = props.data

  const Goals = goals.map((goal) => {
    return (
      <RoadmapGoal key={goal.id} desc={goal.desc} xp={goal.xp}></RoadmapGoal>
    );
  })


  return (
    <>
      <Container height="55vh" width="380px" borderRadius="10px" style={{paddingTop:"5px"}}>
        <TitleWithBorder>Roadmap</TitleWithBorder>
        {Goals}
      </Container>
    </>
  );
}