import Container from "../Container";
import MaioresGastosBubble from "../MaioresGastosBubble";

export default function MaioresGastos(props) {
  const gastos = props.data

  const Gastos = gastos.map((gastos) => {
    return(
      <MaioresGastosBubble id={gastos.id} desc = {gastos.desc} porcentagem = {gastos.porcentagem}></MaioresGastosBubble>
    );
  })

  return (
    <>
      <Container height="1009px" width="380px">
        <h2 style={{ textAlign: "center", margin: "5px" }}>Roadmap</h2>
        {Gastos}
      </Container>
    </>
  );
}