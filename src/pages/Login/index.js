import React, { useState } from 'react';
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
import { CircularProgress, IconButton, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { AuthContext } from '../../contexts/auth';

function Login() {

  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [wrongUser, setWrongUser] = React.useState('');
  const { signIn, user } = React.useContext(AuthContext);

  const [loading, setLoading] = React.useState(false)

  const handleChangeEmail = (event) => {
    setLogin(event.target.value);
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = async () => {
    await signIn(login, senha);
    setLoading(false)

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
                setLoading(true)
                setTimeout(handleLogin, 1000)

              }}>
                <div style={{ marginTop: "10%" }}>
                  <Input label="Email" type="primary" width="100%" onChange={handleChangeEmail} value={login}></Input>
                </div>

                <div style={{ marginTop: "5%" }}>
                  <InputPass label="Senha" type="primary" onChange={handleChangeSenha} password={senha}></InputPass>
                </div>

                <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                  <Checkbox>Lembre-me</Checkbox>
                </div>
                <Typography variant="subtitle1" component="span" style={{ fontWeight: 'bold', textDecoration: 'none', color: '#F74F4F' }}>
                  {wrongUser}
                </Typography>
                <Box sx={{display: "flex", flexDirection: "row", position: "relative", width: "100%"}}>
                  <ButtonBalancefy width="100%">Entrar</ButtonBalancefy>
                  {
                    loading && (<Box sx={{display: "flex", alignItems: "center", justifyContent: "center", position: "absolute", right: "0", marginRight: "-45px"}}>
                      <CircularProgress size={36} sx={{ color: "rgb(125, 226, 209)"}} />
                    </Box>)
                  }
                </Box>
              </form>
              <div style={{ marginTop: "10%" }}>
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
