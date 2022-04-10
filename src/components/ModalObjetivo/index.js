import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";
import InputValue from "../InputValue";
import ButtonBalancefy from "../Button";
import { style } from "./style"
import DateInput from "../DateInput";

export default function ModalComponent(props) {
  const [modalState, setModalState] = React.useState(false);

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
          <SelectBalancefy mt='20px' content="category" label="Categoria" width="340px"/>
          <InputValue mt='20px' label="Valor Inicial"/>
          <InputValue mt='20px' label="Valor Total do Objetivo"/>
          <DateInput label="Data de Conclusão" mt='20px'></DateInput>
          <ButtonBalancefy width="340px" color="primary" height="40px">Concluir</ButtonBalancefy>
        </form>
      </Box>
    </Modal>
  )
}