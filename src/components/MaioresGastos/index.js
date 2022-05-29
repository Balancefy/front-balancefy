import Container from "../Container";
import MaioresGastosBubble from "../MaioresGastosBubble";
import TitleBalancefy from "../Title";

export default function MaioresGastos(props) {
  const gastos = props.data

  return (
    <>
      <Container height="30.5vh" borderRadius="10px" backgroundColor="#4B4B4B">
        <div style={{ padding: "27px 0px 0px 40px" }}>
          <TitleBalancefy variant="h2">Maiores Gastos</TitleBalancefy>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}>
          {gastos !== undefined && gastos.length !== 0 ? <>
            <MaioresGastosBubble third id={3} desc={gastos[0].tipo} porcentagem={gastos[2].porcentagem} ></MaioresGastosBubble>
            <MaioresGastosBubble primary id={1} desc={gastos[1].tipo} porcentagem={gastos[0].porcentagem} ></MaioresGastosBubble>
            <MaioresGastosBubble secondary id={2} desc={gastos[2].tipo} porcentagem={gastos[1].porcentagem} ></MaioresGastosBubble>
          </>
            : <></>}

        </div>
      </Container>
    </>
  );
}