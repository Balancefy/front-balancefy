import Container from "../Container";
import MaioresGastosBubble from "../MaioresGastosBubble";
import TitleBalancefy from "../Title";

export default function MaioresGastos(props) {
  const gastos = props.data

  return (
    <>
      <Container height="348px" width="533px" borderRadius="10px" backgroundColor="#4B4B4B">
      <div style={{padding:"27px 0px 0px 40px"}}>
        <TitleBalancefy variant="h2">Maiores Gastos</TitleBalancefy>
      </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}>

          <MaioresGastosBubble third id={gastos[0].id} desc={gastos[0].desc} porcentagem={gastos[0].porcentagem} color={gastos[0].color}></MaioresGastosBubble>
          <MaioresGastosBubble primary id={gastos[1].id} desc={gastos[1].desc} porcentagem={gastos[1].porcentagem} color={gastos[1].color}></MaioresGastosBubble>
          <MaioresGastosBubble secondary id={gastos[2].id} desc={gastos[2].desc} porcentagem={gastos[2].porcentagem} color={gastos[2].color}></MaioresGastosBubble>
        </div>
      </Container>
    </>
  );
}