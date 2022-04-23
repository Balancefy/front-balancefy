import Container from "../Container";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { display } from "@mui/system";
import SetaCima from "../../img/seta-cima.svg";
import SetaBaixo from "../../img/seta-baixo.svg";

export default function BalanceBalancefy(props) {
  return (
    <>
      <Container height="294px" width="36%" borderRadius>
        <div>
          <Container
            background="#4B4B4B"
            height="291px"
            width="521px"
            borderRadius="10px"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <h2
                style={{
                  textAlign: "center",
                  paddingTop: "5px",
                  margin: "40px 0 0 0",
                }}
              >
                Saldo Atual em Conta
              </h2>
              <h3
                style={{
                  alignItens: "center",
                  justifyContent: "center",
                  paddingTop: "5px",
                  margin: 0,
                  display: "flex",
                  marginTop: "5px",
                }}
              >
                R$ <div style={{ color: "#7DE2D1" }}>30.000,00</div>
                <RemoveRedEyeIcon></RemoveRedEyeIcon>
              </h3>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: "60px",
              }}
            > 
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img style={{marginRight:"10px"}}alt="setaCima" width="30px" src={SetaCima} />
                <div style={{display:"flex",  flexDirection:'column', justifyContent:"flex-end"}}>
                  <h4 style={{ fontWeight: 400, margin: 0}}>Entradas</h4>
                  <p style={{ fontWeight: 400, color: "#7DE2D1", margin: 0}}>2.000,00</p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img style={{marginRight:"10px"}}alt="setaBaixo" width="30px" src={SetaBaixo} />
                <div style={{display:"flex",  flexDirection:'column', justifyContent:"flex-end"}}>
                <h4 style={{ fontWeight: 400, margin: 0 }}>Saída</h4>
                <p style={{ fontWeight: 400, color: "#F45959", margin: 0}}>450,00</p>
              </div>
              </div>
            </div>
          </Container>
        </div>
      </Container>
    </>
  );
}
