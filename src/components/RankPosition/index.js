export default function RankPosition(props) {
  return (
    <>
      <div onClick={props.onClick}
      style={{
        display: "flex",
        width: "100%",
        height: "51.2px",
        background: props.position % 2 === 0 ? "#131515" : "#2B2C28",
        alignItems: "center",
      }}>
        <div style={{
          display: "flex",
          width: "44px",
          height: "37px",
          background: "#7DE2D1",
          borderRadius: "5px",
          color: "#000",
          alignItems: "center",
          fontSize: "18px",
          marginLeft: "20px",
          justifyContent: "center",
        }}>
          #{props.position}
        </div>
        <div style={{
          marginLeft: "15px",
          width: "200px"
        }}>
          {props.name}
        </div>
        <div style={{}}>
          {props.goals}
        </div>
        <div style={{
          marginLeft: "30px"
        }}>
          {props.progress}
        </div>

      </div>
    </>
  );
}