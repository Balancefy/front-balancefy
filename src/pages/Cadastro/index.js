import React from "react";
import { Link } from "react-router-dom";
import TitleBalancefy from "../../components/Title";
import Input from "../../components/Input";
import InputPass from "../../components/InputPass";
import Container from "../../components/Container";
import background from "../../img/login.png";
import logoFace from "../../img/facebook.svg";
import logoGoogle from "../../img/google.svg";
import logoInsta from "../../img/instagram.svg";
import ou from "../../img/ou.svg";
import PersonIcon from "@mui/icons-material/Person";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AddIcon from "@mui/icons-material/Add";
import EmailIcon from "@mui/icons-material/Email";
import { Box, flexbox } from "@mui/system";
import {
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse";
import { AuthContext } from "../../contexts/auth";
import LoginGoogle from "../../components/LoginGoogle";
import DateInput from "../../components/DateInput";

export default function Cadastro() {
  return (
    <>
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
                width: "60%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <TitleBalancefy variant="h2">
                  Conte-nos sobre você.
                </TitleBalancefy>

                {/* <TitleBalancefy variant="body3">
                  Já tem uma conta?{" "}
                  <Link
                    to="/login"
                    style={{ color: "#7DE2D1", textDecoration: "none" }}
                  >
                    Log in
                  </Link>
                </TitleBalancefy> */}
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
                  <DateInput width="100%"> </DateInput>
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

                <div style={{ marginTop: "5%", width: "100%" }}>
                  <TitleBalancefy variant="body4">Gastos fixos</TitleBalancefy>
                  <Input label="Descrição" type="primary" width="100%"></Input>
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
                  <Input label="Categoria" type="primary" width="267px"></Input>
                </div>

                <div style={{ marginTop: "5%" }}>
                  <AddIcon color="primary"></AddIcon>
                  <subtitle2>Adicionar Gasto</subtitle2>
                </div>

                {/* <div
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
                  <Input label="Sobrenome" type="primary" width="267px"></Input>
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
                </div> */}

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

              {/* <div style={{ marginTop: "10%" }}>
                <img alt="or" style={{ width: "100%" }} src={ou} />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10%",
                }}
              >
                <LoginGoogle page="register"/>

                <IconButton>
                  <img alt="instagram" src={logoInsta} />
                </IconButton>

                <IconButton>
                  <img alt="facebook" src={logoFace} />
                </IconButton>
              </div> */}
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
