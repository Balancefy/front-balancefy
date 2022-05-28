import Container from "../Container";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { default as TModel } from './transactionModel'

export default function BalanceBalancefy(props) {
  const balance = props.balance

  return (
    <>
      <div>
        <Container
          background="#4B4B4B"
          height="291px"
          borderRadius="10px"
          style={{
            display: "flex",
            flexDirection: "column",
            
          }}
        >
          <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
            <h2
              style={{
                textAlign: "center",
                paddingTop: "5px",
                margin: "40px 0 0 0",
              }}
            >
              Saldo atual em conta
            </h2>
            <div style={{display:"flex", flexDirection: "row", alignItems:"center"}}>
              <h3 style={{
                  alignItens: "center",
                  justifyContent: "center",
                  margin: 0,
                  display: "flex",
                  marginTop: "10px",
                  fontSize: "20px",
              }}>R$</h3>
              <h3
                style={{
                  alignItens: "center",
                  justifyContent: "center",
                  margin: 0,
                  display: "flex",
                  marginTop: "10px",
                  fontSize: "20px",
                  color: "#7DE2D1",
                  margin: "0 10px 0 5px"
                }}
              >
               {
                balance.saldo !== "" || balance.saldo !== undefined ? Number(balance.saldo).toFixed(2) : (0).toFixed(2)
               }
              </h3>

              <RemoveRedEyeIcon sx={{marginTop:"10px", cursor:"pointer"}}></RemoveRedEyeIcon>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: "60px",
            }}
          >
            <TModel value={balance.saldo !== "" || balance.saldo !== undefined ? Number(balance.entrada).toFixed(2) : (0).toFixed(2)} />
            <TModel out value={balance.saldo !== "" || balance.saldo !== undefined ? Number(balance.saida).toFixed(2) : (0).toFixed(2)} />
          </div>
        </Container>
      </div>
    </>
  );
}
