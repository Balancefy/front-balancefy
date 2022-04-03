import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import Container from "../Container";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import SelectBalancefy from "../Select";

export default function ModalComponent(props) {
  const [modalState, setModalState] = React.useState(true);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 420,
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
          sx={{ position: "absolute", top: 10, right: 10, color: 'white' }}
          onClick={props.onClick}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2">
          {props.title}
        </Typography>
        <Input label="Descricao"/>
        <SelectBalancefy label="Categoria" width="340px"/>
      </Box>
    </Modal>
  )
}