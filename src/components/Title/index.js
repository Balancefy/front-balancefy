import { Typography } from "@mui/material";

function TitleBalancefy(props) {
    return(
    <>
        <Typography onClick={props.onClick} variant={props.variant} 
        style={{
            color: props.color,
            ...props.style,
            transition: `${1}s`
        }}>
            {props.children}
        </Typography>
    </>
    )
}

export default TitleBalancefy;