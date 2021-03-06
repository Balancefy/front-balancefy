import { Box } from "@mui/material";
import Menu from "../Menu";

export default function MainContainer(props) {
    return(
        <>
            <Box sx={{display: "flex"}}>
                <Menu page={props.page}></Menu>
                {props.children}
            </Box>
        </>
    )
}