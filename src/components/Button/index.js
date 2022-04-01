import { Button } from "@mui/material";

function ButtonBalancefy(props) {
    const buttonTypes = {
        Primary: "primary",
        Secondary: "secondary"
    }
    return (
    <>
        <Button type="submit" variant="contained" 
        style={{
            color: props.variant === buttonTypes.Secondary ? "#FFF" : "#131515",
            backgroundColor: props.variant === buttonTypes.Secondary ? "#4B4B4B" : "#7DE2D1",
            width: props.width,
            height: "60px"
            }}>
                {props.children}
        </Button>
    </>
    )
}

export default ButtonBalancefy;

