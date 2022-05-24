import { Box, IconButton, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import ButtonBalancefy from "../Button";
import { style } from "./style"
import api from "../../service/api";
import { Navigate } from "react-router-dom";


export default function ModalTopico(props) {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  let modalState = props.open

  const handleTopico = () => {
    api.post("/forum", {
        titulo: titulo,
        conteudo: conteudo
    }).then((res) => {
        window.location.reload()
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleConteudo = (event) => {
    setConteudo(event.target.value)
  }

  const handleTitulo = (event) => {
    setTitulo(event.target.value)
  }

  return (
    <Modal
      open={modalState}
    >
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
            handleTopico()
          }}>
          <Input mt='20px' onChange={handleTitulo} value={titulo} type="primary" width="340px" label="Título"/>
          <Input mt='20px' onChange={handleConteudo} value={conteudo}  type="primary" width="340px" label="Descrição" row={4}/>
          <Box sx={{mt: 4}}>
            <ButtonBalancefy width="340px" color="primary" height="40px">Publicar</ButtonBalancefy>
          </Box>
          {
            props.edit ? 
              <Box sx={{mt: 2}}>
                <ButtonBalancefy width="340px" color="secondary" height="40px">Excluir</ButtonBalancefy>
              </Box> 
              : 
              <></>
          }
          
        </form>
      </Box>
    </Modal>
  )
}