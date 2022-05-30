import React from 'react';
import TitleBalancefy from "../../components/Title";
import Input from "../../components/Input";
import InputPass from "../../components/InputPass";
import Container from "../../components/Container";
import background from "../../img/login.png";
import ou from "../../img/ou.svg";
import { Box } from "@mui/system";
import { Button, CircularProgress, FormControlLabel, InputAdornment } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Alert from '@mui/material/Alert';
import EmailIcon from '@mui/icons-material/Email';
import Collapse from '@mui/material/Collapse';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import LoginGoogle from '../../components/LoginGoogle';
import LoginGithub from '../../components/LoginGihub';
import LoginFacebook from '../../components/LoginFacebook';
import TitleWithDot from '../../components/TitleWithDot';

function Login() {

  const [open, setOpen] = React.useState(false);
  const [login, setLogin] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const { signIn, user, signInSocial } = React.useContext(AuthContext);

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
      setOpen(true)
      setLogin('')
      setSenha('')
    }
  }

  return (
    <>
      <Collapse sx={{position: "absolute", top: 20, left: 20, width: 500}} in={open}>
        <Alert variant="filled" severity="error">
          Email/Senha inválidos
        </Alert>
      </Collapse>
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
                <TitleWithDot>Faça seu login</TitleWithDot>
                <TitleBalancefy variant="body3"> Não tem uma conta?{" "}</TitleBalancefy>
                <TitleBalancefy variant="body3" color="#7DE2D1">
                <Link
                    to="/cadastro"
                    style={{ color: "#7DE2D1", textDecoration: "none" }}
                  > Cadastre-se
                  </Link>
                </TitleBalancefy>
              </div>

              <form onSubmit={(event) => {
                event.preventDefault()
                setLoading(true)
                setTimeout(handleLogin, 1000)

              }}>
                <div style={{ marginTop: "10%" }}>
                  <Input label="Email" type="primary" width="100%" onChange={handleChangeEmail} value={login} adornment={<InputAdornment position="end"><EmailIcon/></InputAdornment>}></Input>
                </div>

                <div style={{ marginTop: "5%" }}>
                  <InputPass  width="100%" label="Senha" type="primary" onChange={handleChangeSenha} password={senha}></InputPass>
                </div>

                <div style={{ marginTop: "5%", marginBottom: "5%" }}>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Lembre-me" />
                </div>
                <Box sx={{display: "flex", flexDirection: "row", position: "relative", width: "100%"}}>
                  <Button sx={{width: "100%", height: "5vh"}} variant="contained" disabled={loading} type="submit">Entrar</Button>
                  {
                    loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: "#7DE2D1",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />)
                  }
                </Box>
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
                <LoginGoogle onSuccess={(email) => signInSocial(email)}/>

                <LoginGithub onSuccess={(email) => signInSocial(email)} onFailure={() => setOpen(true)}/>

                <LoginFacebook onSuccess={(email) => signInSocial(email)} onFailure={() => setOpen(true)}/>
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
