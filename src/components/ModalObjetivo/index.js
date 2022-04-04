import { Box, formLabelClasses, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";
import InputValue from "../InputValue";
import ButtonBalancefy from "../Button";

export default function ModalComponent(props) {
  const [modalState, setModalState] = React.useState(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#131515',
    boxShadow: 24,
    color: 'white',
    pt: 2,
    px: 4,
    pb: 3,
  };

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
        <Typography variant="h6" color="primary">
          {props.title}
        </Typography>
        <form>
          <Input mt='20px' label="Descrição"/>
          <SelectBalancefy mt='20px' label="Categoria" width="340px"/>
          <InputValue mt='20px' label="Valor Inicial"/>
          <InputValue mt='20px' label="Valor Total do Objetivo"/>
          <Box sx={{pt: 2, pb: 2}}>
            <Typography variant="subtitle1">
              Data de Conclusão
            </Typography>
            <SelectBalancefy label="Dia" mr="10px" width="90px"/>
            <SelectBalancefy label="Mês" mr="10px" width="140px"/>
            <SelectBalancefy label="Ano" mr="10px" width="90px"/>
          </Box>
          <ButtonBalancefy width="340px" color="secondary" height="40px">Concluir</ButtonBalancefy>
        </form>
      </Box>
    </Modal>
  )
}