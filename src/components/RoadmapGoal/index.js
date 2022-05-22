export default function RoadmapGoal(props) {
  return (
    <>
      <div style={{
        display: "flex",
        width: "100%",
        height: "40px",
        background: "#131515",
        alignItems: "center",
        marginBottom: "25px",
      }}>
        <div style={{ width: "70px", display: "flex", justifyContent: "center", position:"relative"}}>
          <div style={{
            width: props.goal ? "28px" : "20px",
            height: props.goal ? "28px" : "20px",
            background: "#7DE2D1",
            borderRadius: "50px",
            border: "solid 1px #4B4B4B",
            position: "relative",
            zIndex: 2
          }}>
          </div>
          <hr style={{
            display: props.goal ? "none" : "initial", 
            border: "3px solid #4B4B4B", top: "-55px", width: "5px", height: "50px", position:"absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 1
          }}></hr>
        </div>


        <div style={{
          display: "flex",
          width: "250px",
          height: "40px",
          background: "#4B4B4B",
          alignItems: "center",
          borderRadius: "10px",
          fontSize: "12px",
          marginLeft: "30px",
          flexDirection: "row",
          paddingTop: "5px",
          paddingBottom: "5px"
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