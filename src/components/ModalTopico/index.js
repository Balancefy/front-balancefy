import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Input from "../Input";
import ButtonBalancefy from "../Button";
import { style } from "./style"


export default function ModalTopico(props) {
  const [modalState, setModalState] = React.useState(true);

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
        <form>
          <Input mt='20px' type="primary" width="340px" label="Título"/>
          <Input mt='20px' type="primary" width="340px" label="Descrição" row={4}/>
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