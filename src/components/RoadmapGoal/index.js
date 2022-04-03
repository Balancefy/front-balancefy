export default function RoadmapGoal(props) {
  return (
    <>
      <div style={{
        display: "flex",
        width: "100%",
        height: "40px",
        background: "#131515",
        alignItems: "center",
        marginTop: "25px"
      }}>

        <div style={{
          width: "28px",
          height: "28px",
          background: "#7DE2D1",
          borderRadius: "50px",
          marginLeft: "30px"
        }}>
        </div>

        <div style={{
          display: "flex",
          width: "200px",
          height: "40px",
          background: "#4B4B4B",
          alignItems: "center",
          borderRadius: "10px",
          fontSize: "12px",
          marginLeft: "30px",
          flexDirection: "row"
        }}>

          <div style={{
            width: "28px",
            height: "28px",
            background: "#C4C4C4",
            borderRadius: "10px",
            marginLeft: "10px"
          }}>
          </div>

          <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px"
          }}>

            <div style={{
              fontSize: "12px",
            }}>
              {props.desc}
            </div>
            
            <div style={{
              color: "#A5A5A5"
            }}>
              + {props.xp}XP
            </div>
          </div>
        </div>
      </div>
    </>
  );
}