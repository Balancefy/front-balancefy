import Container from "../Container";

export default function MaioresGastosBubble(props) {
  return (
    <>
      <Container height="1009px" width="1285px">
        <div style={{
          display: "flex",
          height: "348px",
          width: "533px",
          background: "#4B4B4B",
          borderRadius: "10px"
        }}>
          <h3 style={{
            margin: 0
          }}>Maiores Gastos</h3>

          <div style={{
            display: "flex",
            alignItems: "center"
          }}>
            <div style={{
              display: "flex",
              height: "150px",
              width: "150px",
              backgroundColor: "#7DE2D1",
              borderRadius: "50%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: 'column'
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
          </div>
        </div>
      </Container>
    </>
  );
}
