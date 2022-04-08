import { Typography } from "@mui/material";

function TitleBalancefy(props) {
    return(
    <>
        <Typography variant={props.variant} 
        style={{
            color: props.color
        }}>
            {props.children}
        </Typography>
    </>
    )
}

export default TitleBalancefy;