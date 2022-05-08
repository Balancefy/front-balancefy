import Container from "../../components/Container";
import Titulo from "../../components/Titulo";
import Title from "../../components/Title";
import TitleBalancefy from "../../components/Title";

export default function TransactionHistory(props) {
  return (
    <>
        <Container
          style={{ marginTop: "1.5%" }}
          margin="auto"
          height="580px"
          width="632px"
          backgroundColor="#4B4B4B"
        >
          <Titulo variant="h3" styles={{fontSize : "24px", marginTop:"48px"}}>
            Movimentações
          </Titulo>
          <div>

          </div>
          <Title sx={{fontSize: "0.9rem"}}>
          Movimentações
          </Title>
        </Container>
    </>
  )
}