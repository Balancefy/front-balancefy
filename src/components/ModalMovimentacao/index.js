import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";
import { style } from "./style"
import InputValue from "../InputValue";
import ButtonBalancefy from "../Button";


export default function ModalMovimentacao(props) {
  let modalState = props.open

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
        <form>
          <Input mt='10px' label="Descrição"/>
          <InputValue mt='20px' label="Valor"/>
          <SelectBalancefy mt='20px' type="categoryTransaction" label="Categoria" width="340px"/>
          <SelectBalancefy mt='20px' mb="40px" content="type" label="Tipo de Movimentação" width="340px"/>
          <ButtonBalancefy width="340px" color="primary" height="40px">Concluir</ButtonBalancefy>
        </form>
      </Box>
    </Modal>
  )
}