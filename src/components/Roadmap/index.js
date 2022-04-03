import Container from "../Container";
import RoadmapGoal from "../RoadmapGoal";

export default function Roadmap(props) {
  const goals = props.data

  const Goals = goals.map((goal) => {
    return(
      <RoadmapGoal key={goal.id} desc = {goal.desc} xp = {goal.xp}></RoadmapGoal>
    );
  })


  return (
    <>
      <Container height="1009px" width="380px">
        <h2 style={{ textAlign: "center", margin: "5px" }}>Roadmap</h2>
        {Goals}
      </Container>
    </>
  );
}