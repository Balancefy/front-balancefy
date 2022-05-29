import { Button } from "@mui/material";

function ButtonBalancefy(props) {
  const buttonTypes = {
    Primary: "primary",
    Secondary: "secondary",
  }
  return (
    <>
      <Button
        type={!!props.type == true ? props.type : "submit"}
        variant="contained"
        color={props.color}
        style={{
          width: props.width,
          height: props.height,
          borderRadius: props.radius,
          ...props.style
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
