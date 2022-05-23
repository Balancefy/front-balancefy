import { Box } from '@mui/material';
import AvatarBalancefy from '../Avatar';
import { default as Reply } from '../Button';
import Input from '../Input';
import avatar from "../../img/user3.jpg"

export default function AddComment(props) {
  return (
    <Box sx={{display:"flex",flexDirection:"column"}}>
      <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 4, mb: 2 }}>
        <AvatarBalancefy imageAvatar={avatar} width="45px" />
        <Box sx={{ ml: 2, width: "85%" }}>
          <Input label="Adicione um comentario" width="100%" />
        </Box>
      </Box>
      <Reply style={{ height: "30px", marginLeft: "auto" }}>Confirmar</Reply>
    </Box>
  )
}