import { Button } from "@mui/material";

function ButtonBalancefy(props) {
  const buttonActionType = props.buttonActionType === "button" ? {
    type: "button"
  } : {
    type: "submit"
  }

  const buttonTypes = {
    Primary: "primary",
    Secondary: "secondary",
  }
  return (
    <>
      <Button
        type={props.buttonActionType}
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
