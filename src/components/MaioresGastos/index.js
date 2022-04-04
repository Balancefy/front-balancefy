import Container from "../Container";
import MaioresGastosBubble from "../MaioresGastosBubble";

export default function MaioresGastos(props) {
  const gastos = props.data

  const Gastos = gastos.map((gastos) => {
    return(
      <MaioresGastosBubble key={gastos.id} desc = {gastos.desc} porcentagem = {gastos.porcentagem}></MaioresGastosBubble>
    );
  })

  return (
    <>
      <Container height="1009px" width="380px">
        {Gastos}
      </Container>
    </>
  );
}


// const gastos = [
//   { id: 1, desc: "UBER", porcentagem: "55"},
//   { id: 2, desc: "UBER", porcentagem: "37"},
//   { id: 3, desc: "Roupa", porcentagem: "17"}
// ]


// <MaioresGastos data={gastos}></MaioresGastos>