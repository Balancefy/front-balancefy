import { Alert, Box, Collapse, IconButton, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";
import { style } from "./style"
import InputValue from "../InputValue";
import ButtonBalancefy from "../Button";
import api from "../../service/api";
import { validCategoriaTransaciton, validDescTransaciton, validTypeTransaciton, validValueTransaciton } from "../../service/utils";


export default function ModalMovimentacao(props) {
  let modalState = props.open

  const [transaction, setTransaction] = useState({
    valor: "",
    categoria: "",
    descricao: "",
    tipo: ""
  });

  const [ open, setOpen ] = React.useState(false);
  const [ validDescIpt, setValidDescIpt ] = React.useState(false);
  const [ validValueIpt, setValidValueipt ] = React.useState(false);
  const [ validCategoriaIpt, setValidCategoriaIpt ] = React.useState(false);
  const [ validTipoIpt, setValidTipoIpt ] = React.useState(false);

  const handleMovimentacao = () => {
    if (props.title === "Nova Movimentação") {
      console.log(transaction.tipo)
      api.post("/transactionFixed", transaction)
        .then((res) => {
          window.location.reload()
        }).catch((err) => {
          console.log(err)
        })
    }
    else if (props.title === "Nova Movimentação do Objetivo") {
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
    if (!(transaction.valor.length === 0 && event.target.value === 0)) {
      setTransaction({
        ...transaction,
        valor: event.target.value
      })
    }
  }

  const validTransaction = () => {
    if(validDescIpt && validCategoriaIpt && validValueIpt && validTipoIpt){
      return true
    }
    return false
  }

  return (
    <Modal open={modalState}>
      <>
        <Collapse sx={{ position: "absolute", top: 20, left: 20, width: 500 }} in={open}>
          <Alert variant="filled" severity="error">
            Falha na criação da Movimentação
          </Alert>
        </Collapse>
        <Box sx={style}>
          <IconButton
            sx={{ position: "absolute", top: 0, right: 0, color: 'white' }}
            onClick={props.onClick}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
            {props.title}
          </Typography>
          <form onSubmit={(event) => {
            event.preventDefault()
            setValidDescIpt(validDescTransaciton(transaction.descricao))
            setValidCategoriaIpt(validCategoriaTransaciton(transaction.categoria))
            setValidValueipt(validValueTransaciton(transaction.valor))
            setValidTipoIpt(validTypeTransaciton(transaction.tipo))
            if (validTransaction()) {
              handleMovimentacao()
            } else {
              setOpen(true)
              setTimeout(() => setOpen(false), 1500)
              setTransaction({
                valor: "",
                categoria: "",
                descricao: "",
                tipo: ""
              })
            }
          }}>
            <Input mt='10px' width="100%" onChange={handleDescricao} value={transaction.descricao} label="Descrição" />
            <InputValue mt='20px' width="100%" onChange={handleValor} value={transaction.valor} label="Valor" />
            <SelectBalancefy onChange={handleCategory} value={transaction.categoria} mt='20px' type="categoryTransaction" label="Categoria" width="340px" />
            <SelectBalancefy onChange={handleType} value={transaction.tipo} mt='20px' mb="40px" content="type" label="Tipo de Movimentação" width="340px" />
            <ButtonBalancefy width="340px" color="primary" height="40px">Concluir</ButtonBalancefy>
          </form>
        </Box>
      </>
    </Modal>
  )
}