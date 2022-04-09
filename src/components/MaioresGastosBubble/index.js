import Container from "../Container";

export default function MaioresGastosBubble(props) {
  const size = props.porcentagem + 100;
  return (
    
    <>
      <div style={{
        display: "flex",
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: `${props.color}`,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        position: 'relative',
        left: "8%",
        margin: "80px -10px 0 15px",
      }}>
        <div style={{
          fontWeight: "bold"
        }}>
          {props.id}.{props.desc}
        </div>
        <div>
          {props.porcentagem}%
        </div>
      </div>
    </>
  );
}
