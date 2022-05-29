import { Box } from '@mui/material';
import AvatarBalancefy from '../Avatar';
import { default as Reply } from '../Button';
import Input from '../Input';
import avatar from "../../img/user3.jpg"
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function AddComment(props) {
  const { user } = useContext(AuthContext)

  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 4, mb: 2 }}>
        <AvatarBalancefy imageAvatar={user.usuario.avatar} width="45px" />
        <Box sx={{ ml: 2, width: "85%" }}>
          <Input value={props.value} onChange={props.onChange}  label="Adicione um comentario" width="100%" />
        </Box>
      </Box>
      <Reply onClick ={props.replyAction} style={{ height: "30px", marginLeft: "auto" }}>Confirmar</Reply>
    </Box>
  )
}