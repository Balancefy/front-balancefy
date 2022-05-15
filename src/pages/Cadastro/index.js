import React from "react";
import { Link } from "react-router-dom";
import TitleBalancefy from "../../components/Title";
import Input from "../../components/Input";
import InputPass from "../../components/InputPass";
import Container from "../../components/Container";
import background from "../../img/login.png";
import ou from "../../img/ou.svg";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AddIcon from "@mui/icons-material/Add";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import {
  Alert,
  Button,
  Collapse,
  InputAdornment,
} from "@mui/material";
import LoginGoogle from "../../components/LoginGoogle";
import DateInput from "../../components/DateInput";
import LoginGithub from "../../components/LoginGihub";
import SelectBalancefy from "../../components/Select";
import LoginFacebook from "../../components/LoginFacebook";
import api from "../../service/api";
import TitleWithDot from "../../components/TitleWithDot";
import AddExpense from "../../components/AddExpense";

export default function Cadastro() {
  const [displayOne, setDisplayOne] = React.useState("none");
  const [displayTwo, setDisplayTwo] = React.useState("block");
  const [displayThree, setDisplayThree] = React.useState("none");
  const [open, setOpen] = React.useState(false);
  const [userType, setUserType] = React.useState("DEFAULT");
  const [expenses, setExpenses] = React.useState([]);

  const handleSocialRegister = (res) => {
    console.log(res)
    api.post("/users", {
      nome: res.name,
      email: res.email,
      avatar: res.picture.data.url,
      type: userType
    }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  const addExpense = () => {
    setExpenses(expenses.concat(<AddExpense></AddExpense>));
  }



  return (
    <>
      <Collapse sx={{ position: "absolute", top: 20, left: 20, width: 500 }} in={open}>
        <Alert variant="filled" severity="error">
          Autenticação falha
        </Alert>
      </Collapse>
      <Container
        style={{ marginTop: "1.5%" }}
        margin="auto"
        height="95vh"
        width="90%"
      >
        <div style={{ display: "flex" }}>
          <Box sx={{ width: "60%", display: "flex", alignItems: "center" }}>
            <div
              style={{
                margin: "auto",
                width: "65%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div id="form-1" style={{ display: displayOne }}>
                <div>
                  <TitleWithDot>Crie uma nova conta</TitleWithDot>
                  <TitleBalancefy variant="body3"> Já tem uma conta?</TitleBalancefy>
                  <TitleBalancefy variant="body3" color="#7DE2D1">
                    <Link
                      to="/cadastro"
                      style={{ color: "#7DE2D1", textDecoration: "none" }}
                    > Log in
                    </Link>
                  </TitleBalancefy>
                </div>

                <form
                  style={{ width: "100%" }}
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      marginTop: "10%",
                      display: "flex",
                    }}
                  >
                    <Input
                      label="Nome"
                      type="primary"
                      width="267px"
                      adornment={
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    ></Input>
                    <Input
                      label="Sobrenome"
                      type="primary"
                      width="267px"
                    ></Input>
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <Input
                      label="Email"
                      type="primary"
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      }
                    ></Input>
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <InputPass
                      width="100%"
                      label="Senha"
                      type="primary"
                    ></InputPass>
                    <subtitle2 style={{ fontWeight: 400 }}>
                      Senha deve ter pelo menos 8 carater.{" "}
                    </subtitle2>
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <InputPass
                      width="100%"
                      label="Confirmar senha"
                      type="primary"
                    ></InputPass>
                  </div>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <Button
                      sx={{ marginTop: "5%", width: "100%", height: "5vh" }}
                      variant="contained"
                      type="submit"
                      onClick={() => {
                        setDisplayOne("none");
                        setDisplayTwo("block");
                        setDisplayThree("none");
                      }}
                    >
                      Continuar
                    </Button>
                  </Box>
                </form>
              </div>

              <div id="form-2" style={{ display: displayTwo }}>
                <div>
                  <TitleWithDot>
                    Conte-nos sobre você
                  </TitleWithDot>
                </div>
                <form
                  style={{ width: "550px" }}
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div style={{ marginTop: "5%", width: "100%" }}>
                    <TitleBalancefy variant="body4">
                      Data de nascimento
                    </TitleBalancefy>
                    <DateInput mt={0.9} width="100%"> </DateInput>
                  </div>
                  <div>
                    <Input
                      label="Renda"
                      type="primary"
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    ></Input>
                  </div>
                  <div style={{ overflow: "auto", height: "300px", paddingRight: "10px",marginTop: "10px" }}>
                    <div style={{ marginTop: "5%", width: "100%" }}>
                      <TitleBalancefy variant="body4">
                        Gastos fixos
                      </TitleBalancefy>
                      <Input
                        mt={0.9}
                        label="Descrição"
                        type="primary"
                        width="100%"
                      ></Input>
                    </div>
                    <div
                      style={{
                        justifyContent: "space-between",
                        marginTop: "5%",
                        display: "flex",
                      }}
                    >
                      <Input
                        label="Valor"
                        type="primary"
                        width="267px"
                        adornment={
                          <InputAdornment position="end">
                            <CurrencyExchangeIcon />
                          </InputAdornment>
                        }
                      ></Input>

                      <SelectBalancefy
                        label="Categoria"
                        type="primary"
                        content="category"
                        width="267px"
                      ></SelectBalancefy>
                    </div>
                    <div>
                      <>
                        {expenses}
                      </>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: "5%",
                      display: "flex",
                      alignItems: "center",
                      height: "fit-content",
                      cursor: "pointer"
                    }}
                    onClick={() => addExpense()}
                  >
                    <AddIcon color="primary"></AddIcon>
                    <p style={{ margin: 0 }}>Adicionar Gasto</p>
                  </div>


                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <Button
                      sx={{ marginTop: "5%", width: "100%", height: "5vh" }}
                      variant="contained"
                      type="submit"
                      onClick={() => {
                        setDisplayOne("none");
                        setDisplayTwo("none");
                        setDisplayThree("block");
                      }}
                    >
                      Continuar
                    </Button>
                  </Box>
                </form>
              </div>

              <div id="form-3" style={{ display: displayThree }}>
                <div>
                  <TitleWithDot>
                    Qual seu Objetivo?
                  </TitleWithDot>
                </div>

                <form
                  style={{ width: "550px" }}
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div style={{ marginTop: "5%", width: "100%" }}>
                    <TitleBalancefy variant="body4">Objetivo</TitleBalancefy>
                  </div>
                  <Input label="Descrição" type="primary" width="100%"></Input>

                  <div style={{ marginTop: "5%" }}>
                    <SelectBalancefy
                      label="Categoria"
                      type="primary"
                      content="category"
                      width="100%"
                    ></SelectBalancefy>
                  </div>

                  <div style={{ marginTop: "5%", width: "100%" }}>
                    <TitleBalancefy variant="body4">
                      Data de conclusão
                    </TitleBalancefy>
                  </div>

                  <DateInput width="100%"> </DateInput>

                  <div>
                    <Input
                      label="Valor Inicial"
                      type="primary"
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    ></Input>
                  </div>

                  <div style={{ marginTop: "5%" }}>
                    <Input
                      label="Valor do objetivo"
                      type="primary"
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    ></Input>
                  </div>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <Button
                      sx={{ marginTop: "5%", width: "100%", height: "5vh" }}
                      variant="contained"
                      type="submit"
                    >
                      Finalizar
                    </Button>
                  </Box>
                </form>
              </div>

              <div style={{ display: displayOne }}>
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
                  <LoginGoogle page="register" onSuccess={() => {
                    handleSocialRegister()
                    setUserType("GOOGLE")
                  }} onFailure={() => setOpen(true)} />

                  <LoginGithub page="register" onSuccess={() => {
                    handleSocialRegister()
                    setUserType("GITHUB")
                  }} onFailure={() => setOpen(true)} />

                  <LoginFacebook page="register" onSuccess={() => {
                    handleSocialRegister()
                    setUserType("FACEBOOK")
                  }} onFailure={() => setOpen(true)} />
                </div>
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
