import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";
import { style } from "./style"
import InputValue from "../InputValue";
import ButtonBalancefy from "../Button";
import api from "../../service/api";


export default function ModalMovimentacao(props) {
  let modalState = props.open

  const [transaction, setTransaction] = useState({
    valor: "",
    categoria: "",
    descricao: "",
    tipo: ""
  });

  const handleMovimentacao = () => {

    if(props.title === "Nova Movimentação") {

      console.log(transaction.tipo)
      api.post("/transactionFixed", transaction)
        .then((res) => {
            window.location.reload()
        }).catch((err) => {
          console.log(err)
        })

    } else if(props.title === "Nova Movimentação do Objetivo") {
      console.log("create fixa" + JSON.stringify(transaction))
    }
  }

  const handleDescricao = (event) => {
    setTransaction({
      ...transaction,
      descricao: event.target.value
    })
  }

  const handleCategory = (event) => {
    setTransaction({
      ...transaction,
      categoria: event.target.value
    })
  }

  const handleType = (event) => {
    setTransaction({
      ...transaction,
      tipo: event.target.value
    })
  }

  const handleValor = (event) => {
    if(!(transaction.valor.length === 0 && event.target.value === 0)){
      setTransaction({
        ...transaction,
        valor: event.target.value
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
            handleMovimentacao()
          }}>
          <Input mt='10px' width="100%" onChange={handleDescricao} value={transaction.descricao} label="Descrição"/>
          <InputValue mt='20px' width="100%" onChange={handleValor} value={transaction.valor} label="Valor"/>
          <SelectBalancefy onChange={handleCategory} value={transaction.categoria} mt='20px' type="categoryTransaction" label="Categoria" width="340px"/>
          <SelectBalancefy onChange={handleType} value={transaction.tipo} mt='20px' mb="40px" content="type" label="Tipo de Movimentação" width="340px"/>
          <ButtonBalancefy width="340px" color="primary" height="40px">Concluir</ButtonBalancefy>
        </form>
      </Box>
    </Modal>
  )
}