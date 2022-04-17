import React from 'react';
import ButtonBalancefy from "../../components/Button";
import TitleBalancefy from "../../components/Title";
import Input from "../../components/Input";
import InputPass from "../../components/InputPass";
import Container from "../../components/Container";
import background from "../../img/login.png";
import logoFace from "../../img/facebook.svg";
import logoGoogle from "../../img/google.svg";
import logoInsta from "../../img/instagram.svg";
import ou from "../../img/ou.svg";
import { Box } from "@mui/system";
import { FormControlLabel, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from '../../contexts/auth';

function Login() {

  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [wrongUser, setWrongUser] = React.useState('');
  const { signIn, user } = React.useContext(AuthContext);

  const handleChangeEmail = (event) => {
    setLogin(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    await signIn(login, senha);

    if (user == null) {
      setWrongUser('Email/Senha inválidos')
      setLogin('')
      setSenha('')
    }
  }

  return (
    <>
      <Container
        style={{ marginTop: "1.5%" }}
        margin="auto"
        height="95vh"
        width="90%"
      >
        <div style={{ display: "flex", }}>
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

              <form onSubmit={(event) => {
                event.preventDefault()
                handleLogin()
              }}>
                <div style={{ marginTop: "10%" }}>
                  <Input label="Email" type="primary" width="100%" onChange={handleChangeEmail} value={login}></Input>
                </div>

                <div style={{ marginTop: "5%" }}>
                  <InputPass  width="100%" label="Senha" type="primary" onChange={handleChangeSenha} password={senha}></InputPass>
                </div>

                <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Lembre-me" />
                </div>
                <Typography variant="subtitle1" component="span" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#F74F4F' }}>
                  {wrongUser}
                </Typography>
                <ButtonBalancefy width="100%">Entrar</ButtonBalancefy>
              </form>
              <div style={{ marginTop: "10%" }}>
                <img alt="or" style={{ width: "100%" }} src={ou} />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10%",
                }}
              >
                <IconButton>
                  <img alt="gmail" src={logoGoogle} />
                </IconButton>

                <IconButton>
                  <img alt="instagram" src={logoInsta} />
                </IconButton>

                <IconButton>
                  <img alt="facebook" src={logoFace} />
                </IconButton>
              </div>
            </div>
          </Box>
          <Box>
            <img
              alt="background"
              style={{
                height: "95vh",
              }}
              src={background}
            />
          </Box>
        </div>
      </Container>
    </>
  );
}

export default Login;
