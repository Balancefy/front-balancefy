import { Button } from "@mui/material";

function ButtonBalancefy(props) {
    const buttonTypes = {
        Primary: "primary",
        Secondary: "secondary"
    }
    return (
    <>
        <Button   
          type="submit" 
          variant="contained" 
          color={props.color}
          style={{
            width: props.width,
            height: props.height,
            borderRadius: props.radius
          }}
          onClick={props.onClick}  
        >
            {props.children}
        </Button>
    </>
    )
}

export default ButtonBalancefy;


// <ButtonBalancefy variant="secondary" width="550px">HAHAHAHAHAHAHA</ButtonBalancefy>
