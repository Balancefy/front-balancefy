import ButtonBalancefy from "../../components/Button";
import TitleBalancefy from "../../components/Title";
import Input from "../../components/Input";
import InputPass from "../../components/InputPass";
import Container from "../../components/Container";
import images from "../../Images/login.png";
import LogoFace from "../../Images/Facebook.svg";
import LogoGoogle from "../../Images/Google.svg";
import LogoInsta from "../../Images/Instagram.svg";
import Ou from "../../Images/Ou.svg";
import { Box } from "@mui/system";
import { Button, Grid, IconButton } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

function Login() {
  return (
    <>
      <Container
        style={{ marginTop: "1.5%" }}
        margin="auto"
        height="95vh"
        width="90%"
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <Box sx={{ width: "60%", display: "flex", alignItems: "center" }}>
            <div
              style={{
                margin: "auto",
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <TitleBalancefy variant="h2">Faça seu Login.</TitleBalancefy>
                <TitleBalancefy variant="body3">
                  Não tem uma conta?{" "}
                </TitleBalancefy>
                <TitleBalancefy variant="body3" color="#7DE2D1">
                  Cadastre-se
                </TitleBalancefy>
              </div>

              <div
                style={{
                  marginTop: "10%",
                }}
              >
                <Input label="Email" type="primary" width="100%"></Input>
              </div>

              <div
                style={{
                  marginTop: "5%",
                }}
              >
                <InputPass label="Senha" type="primary"></InputPass>
              </div>

              <div
                style={{
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                <Checkbox>Lembre-me</Checkbox>
              </div>
              <ButtonBalancefy width="100%">Entrar</ButtonBalancefy>

              <div
                style={{
                  marginTop: "10%",
                }}
              >
                <img src={Ou} />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10%",
                }}
              >
                <IconButton>
                  <img src={LogoGoogle} />
                </IconButton>

                <IconButton>
                  <img src={LogoInsta} />
                </IconButton>

                <IconButton>
                  <img src={LogoFace} />
                </IconButton>
              </div>
            </div>
          </Box>
          <Box>
            <img
              style={{
                height: "95vh",
              }}
              src={images}
            />
          </Box>
        </div>
      </Container>
    </>
  );
}

export default Login;
