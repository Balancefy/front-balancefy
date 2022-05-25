export default function TaskBall(props) {
  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "25px",
      }}>
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{
            width: "80px",
            height: "80px",
            background: "#7DE2D1",
            borderRadius: "100%",
            border: "solid 9px #4B4B4B",
            position: "relative",
            zIndex: 2
          }}>
          </div>
          <hr style={{
            display: props.goal ? "none" : "initial",
            border: "3px solid #4B4B4B", top: "-55px", width: "5px", height: "50px", position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 1
          }}></hr>
        </div>

        <div style={{
          display: "flex",
          width: "300px",
          height: "80px",
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
              +{props.xp}XP
            </div>
            <div style={{
              color: "#A5A5A5"
            }}>
              R$ {props.valor}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}