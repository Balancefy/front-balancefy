import PushPinIcon from '@mui/icons-material/PushPin';

function Dica(props) {
  return (
    <>
      <div style={{
        margin: "2vh auto",
        background: "#4B4B4B",
        height: "158px",
        width: "330px",
        borderRadius: "10px",
        justifyContent: 'center',
        paddingLeft: "30px",
        paddingTop: "15px"
      }}>
        <div>
          <div style={{
            color: "#7DE2D1",
            fontSize: 20,
            fontWeight: "SemiBold",
            display: "flex",
            alignItems: "center"
          }}>
            <PushPinIcon style={{ marginRight: "5px" }}></PushPinIcon>
            {props.title}
          </div>
          <div style={{
            maxWidth: "90%",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "SemiBold",
          }}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dica;

/* 
  <Dica title="Economia">Procure por trajetos de ônibus para economizar 50% dos seus gastos, que são utilizados em Uber</Dica>
  <Dica title="Investimento">“Investimentos em Tesouro Selic te trarão 20% de rendimento ao ano” </Dica>
  <Dica title="Investimento">"Acesse esse site e entenda o básico de investimento: <a href='www.google.com'>Investimentos1000”</a></Dica>
</Container>
{/* <Container height="620px" width="380px"></Container>
<ButtonBalancefy variant="secondary" width="550px">HAHAHAHAHAHAHA</ButtonBalancefy> */