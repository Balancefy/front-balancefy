import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";
import InputValue from "../InputValue";
import ButtonBalancefy from "../Button";
import { style } from "./style"
import DateInput from "../DateInput";
import api from "../../service/api";
import { isInThePast } from "../../service/utils";

export default function ModalObjetivo(props) {
  const [categoryGoalId, setCategoryGoalId] = useState("");
  const [date, setDate] = useState(null);
  const [alerta, setAlert] = useState(false);

  useEffect(() => {
    if(alerta) {
      alert("Intervalo de tempo muito curto")
    }
  }, [alerta])

  const [newGoal, setGoal] = useState({
    descricao: "",
    valorTotal: "",
    valorInicial: "",
    tempoEstimado: "",
  });

  let modalState = props.open

  const handleObjetivo = () => {

    console.log(newGoal.valorInicial > newGoal.valorTotal)

    if(newGoal.valorInicial > newGoal.valorTotal) {
      alert("Seu valor inicial é maior que o valor final")
      return
    }

    if(isInThePast(new Date(newGoal.tempoEstimado))) {
      alert("Data passada seu bobo")
      return
    }

    api.post("/accounts/goals", {
      ...newGoal,
      objetivo: {
        id: categoryGoalId
      }
    })
    .then((res) => {
        window.location.reload()
    }).catch((err) => {
      if(err === "Error: Request failed with status code 500") {
        setAlert(true)
      }
    })
  }

  const handleObjetivoCategoriaId = (event) => {
    setCategoryGoalId(event.target.value)
  }

  const handleDescricao = (event) => {
    setGoal({
      ...newGoal,
      descricao: event.target.value
    })
  }

  const handleValorTotal = (event) => {
    if(!(newGoal.valorTotal.length === 0 && event.target.value === 0)){
      setGoal({
        ...newGoal,
        valorTotal: event.target.value
      })
    }
  }

  const handleValorInicial= (event) => {
    if(!(newGoal.valorTotal.length === 0 && event.target.value === 0)){
      setGoal({
        ...newGoal,
        valorInicial: event.target.value
      })
    }
  }

  return (
    <Modal open={modalState}>
      <Box sx={style}>
        <IconButton
          sx={{ position: "absolute", top: 0, right: 0, color: 'white' }}
          onClick={props.onClick}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" color="primary" sx={{mt: 1}}>
          {props.title}
        </Typography>
        <form onSubmit={(event) => {
            event.preventDefault() 
            handleObjetivo()
          }}>
          <Input mt='10px' width="100%" onChange={handleDescricao} value={newGoal.descricao} label="Descrição"/>
          <SelectBalancefy onChange={handleObjetivoCategoriaId} value={categoryGoalId} mt='20px' content="category" label="Categoria" width="340px"/>
          <InputValue width="100%" onChange={handleValorInicial} value={newGoal.valorInicial} mt='20px' label="Valor Inicial"/>
          <InputValue width="100%" onChange={handleValorTotal} value={newGoal.valorTotal} mt='20px' label="Valor Total do Objetivo"/>
          <DateInput onChange={(newValue) => {
            setDate(newValue)
            setGoal({
              ...newGoal,
              tempoEstimado: new Date(newValue).toLocaleDateString("pt-BR")
            })
          }} value={date}
          width="100%"
          label="Data de Conclusão" mt='20px'></DateInput>
          <ButtonBalancefy width="340px" color="primary" height="40px">Concluir</ButtonBalancefy>
        </form>
      </Box>
    </Modal>
  )
}