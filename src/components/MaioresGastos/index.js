import Container from "../Container";
import MaioresGastosBubble from "../MaioresGastosBubble";

export default function MaioresGastos(props) {
  const gastos = props.data

  const Gastos = gastos.map((gastos) => {
    return (
      <MaioresGastosBubble key={gastos.key} id={gastos.id} desc={gastos.desc} porcentagem={gastos.porcentagem} color={gastos.color}></MaioresGastosBubble>
    );
  })

  return (
    <>
      <Container height="348px" width="533px">
        <div style={{ padding: `25px 0 0 25px` }}>
          <h3 style={{ margin: 0 }}>Maiores Gastos</h3>
        </div>

        <div style={{
          display: "flex",
          position: "relative"
        }}>
          {Gastos}
        </div>
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