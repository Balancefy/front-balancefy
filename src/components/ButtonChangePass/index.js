import { Button, ButtonGroup } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ButtonChangePass(props) {
    return (
    <>
      <ButtonGroup sx={{width: "15%"}}>
        <Button 
          sx={{width: "80%"}}
          type="submit" 
          variant="contained" 
          color="primary"
        >
          Alterar Senha
        </Button>
        <Button type="submit" variant="contained" color="primary">
          <ArrowForwardIosIcon/>
        </Button>
      </ButtonGroup>
    </>
    )
}

export default ButtonChangePass;

