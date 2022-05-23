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
import CheckIcon from '@mui/icons-material/Check';
import {
  Alert,
  Button,
  Collapse,
  FormHelperText,
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
import Step from "../../components/Step";
import InputValue from "../../components/InputValue";

export default function Cadastro() {
  const [displayOne, setDisplayOne] = React.useState("block");
  const [displayTwo, setDisplayTwo] = React.useState("none");
  const [displayThree, setDisplayThree] = React.useState("none");
  const [open, setOpen] = React.useState(false);
  const [userType, setUserType] = React.useState("DEFAULT");
  const [expenses, setExpenses] = React.useState([]);
  const [confirmaSenha, setConfirmaSenha] = React.useState("");
  const [samePass, setSamePass] = React.useState("");
  const [renda, setRenda] = React.useState("");
  const [dataNascimento, setDataNascimento] = React.useState(null);
  const [gastos, setGastos] = React.useState([]);
  
  const [usuario, setUsuario] = React.useState({
    nome: "",
    lastName: "",
    email: "",
    avatar: "",
    tipo: "DEFAULT",
    senha: ""
  });

  const [objetivo, setObjetivo] = React.useState({
    descricao: "",
    categoria: "",
    dataConclusao: "",
    valorInicial: "",
    valorTotal: ""
  });

  const handleSocialRegister = (res) => {
    setUsuario({
      ...usuario,
      nome: res.name,
      email: res.email,
      avatar: res.picture.data.url,
      tipo: userType
    })
  }

  const handleFirstStep = () => {
    localStorage.setItem("@user:firstStep", JSON.stringify(usuario))

    setDisplayOne("none");
    setDisplayTwo("block");
    setDisplayThree("none");
  }

  const handleSecondStep = () => {
    localStorage.setItem("@user:secondStep", JSON.stringify({
      dataNascimento: dataNascimento,
      renda: renda,
      gastosFixos: gastos
    }))

    setDisplayOne("none");
    setDisplayTwo("none");
    setDisplayThree("block");
  }

  const handleThirdStep = () => {
    localStorage.setItem("@user:thirdStep", JSON.stringify(objetivo))
  }

  const handleChangeName = (event) => {
    setUsuario({
      ...usuario,
      nome: event.target.value,
    })
  }

  const handleChangeLastName = (event) => {
    setUsuario({
      ...usuario,
      lastName: event.target.value,
    })
  }

  const handleChangeEmail = (event) => {
    setUsuario({
      ...usuario,
      email: event.target.value,
    })
  }

  const handleChangeSenha = (event) => {
    setUsuario({
      ...usuario,
      senha: event.target.value,
    })
  }

  const handleChangeConfirmaSenha = (event) => {
    setConfirmaSenha(event.target.value)

    if(event.target.value === usuario.senha) {
      setSamePass("#7DE2D1")
    } else {
      setSamePass("#F45959")
    }
  }

  const handleChangeRenda = (event) => {
    setRenda(event.target.value)
  }

  const handleChangeDescricao = (event) => {
    setObjetivo({
      ...objetivo,
      descricao: event.target.value,
    })
  }

  const handleChangeCategoria = (event) => {
    setObjetivo({
      ...objetivo,
      categoria: event.target.value,
    })
  }
 
  const handleChangeValorInicial = (event) => {
    setObjetivo({
      ...objetivo,
      valorInicial: event.target.value,
    })
  }

  const handleChangeValorTotal = (event) => {
    setObjetivo({
      ...objetivo,
      valorTotal: event.target.value,
    })
  }

  const addExpense = () => {
    setExpenses(expenses.concat(<AddExpense onChange={handleExpense}></AddExpense>));
  }

  const handleExpense = (event) => {
    console.log(event.target.value)
    // setGastos(gastos.concat({
    //   descricao: "",
    //   valor: "",
    //   categoria: ""
    // }))
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

              <Step />
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
                    handleFirstStep(event)
                  }}
                >
                  <div
                    style={{
                      justifyContent: "space-between",
                      marginTop: "3vh",
                      display: "flex",
                    }}
                  >
                    <Input
                      label="Nome"
                      type="primary"
                      width="267px"
                      value={usuario.nome}
                      onChange={handleChangeName}
                      adornment={
                        <InputAdornment position="end">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                    <Input
                      label="Sobrenome"
                      type="primary"
                      width="267px"
                      value={usuario.lastName}
                      onChange={handleChangeLastName}
                    />
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <Input
                      label="Email"
                      type="primary"
                      width="100%"
                      value={usuario.email}
                      onChange={handleChangeEmail}
                      adornment={
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <InputPass
                      width="100%"
                      label="Senha"
                      type="primary"
                      password={usuario.senha}
                      onChange={handleChangeSenha}
                    />
                  </div>
                  <div style={{ marginTop: "5%" }}>
                    <InputPass
                      width="100%"
                      label="Confirmar senha"
                      type="primary"
                      password={confirmaSenha}
                      onChange={handleChangeConfirmaSenha}
                    />
                    <FormHelperText sx={{display: 'flex', alignItems: 'center'}}>
                      <CheckIcon sx={{color: samePass}} />
                      <span style={{marginLeft: '5px'}}>Senhas correspondem</span>
                    </FormHelperText>
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
                    handleSecondStep()
                  }}
                >
                  <div style={{ marginTop: "5%", width: "100%" }}>
                    <TitleBalancefy variant="body4">
                      Data de nascimento
                    </TitleBalancefy>
                    <DateInput value={dataNascimento} onChange={(newValue) => {setDataNascimento(newValue)}} mt={0.9} width="100%"/>
                  </div>
                  <div>
                    <InputValue
                      label="Renda"
                      type="primary"
                      value={renda}
                      onChange={handleChangeRenda}
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    />
                  </div>
                  <div style={{ overflow: "auto", height: "25vh", paddingRight: "10px", marginTop: "10px" }}>
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
                      <InputValue
                      label="Valor"
                      type="primary"
                      value={renda}
                      width="267px"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    />

                      <SelectBalancefy
                        label="Categoria"
                        type="primary"
                        content="categoryTransaction"
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
                    handleThirdStep();
                  }}
                >
                  <div style={{ marginTop: "5%", width: "100%" }}>
                    <TitleBalancefy variant="body4">Objetivo</TitleBalancefy>
                  </div>
                  <Input 
                    label="Descrição" 
                    type="primary" 
                    width="100%"
                    onChange={handleChangeDescricao}
                    value={objetivo.descricao}
                  />

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

                  <DateInput 
                    width="100%" 
                    value={objetivo.dataConclusao} 
                    onChange={(newValue) => {
                      setObjetivo({
                        ...objetivo,
                        dataConclusao: newValue,
                      })
                    }}
                  />

                  <div>
                    <InputValue
                      label="Valor Inicial"
                      type="primary"
                      onChange={handleChangeValorInicial}
                      value={objetivo.valorInicial}
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    />
                  </div>

                  <div style={{ marginTop: "5%" }}>
                    <InputValue
                      label="Valor do objetivo"
                      type="primary"
                      onChange={handleChangeValorTotal}
                      value={objetivo.valorTotal}
                      width="100%"
                      adornment={
                        <InputAdornment position="end">
                          <CurrencyExchangeIcon />
                        </InputAdornment>
                      }
                    />
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
                <div style={{ marginTop: "25px" }}>
                  <img alt="or" style={{ width: "100%" }} src={ou} />
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "5px",
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
