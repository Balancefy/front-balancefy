import { Typography } from "@mui/material";

function Titulo(props) {
    return(
    <>
        <Typography variant={props.variant} 
        style={{
            color: "white", 
            fontSize:"48px", 
            ...props.styles
        }}>
            {props.children}
        </Typography>
    </>
    )
}

export default Titulo;