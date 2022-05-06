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
import LoginGithub from "../../components/LoginGihub";
import SelectBalancefy from "../../components/Select";

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
                  Qual seu principal Objetivo?
                </TitleBalancefy>
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

                <div style={{marginTop: "5%"}}>
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
                <LoginGoogle page="register" />

                {/* <LoginGithub page="register"/> */}

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
