import { Box } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TitleBalancefy from "../Title";

export default function TopicMostLiked(props) {
    return (
        <>
            <Box sx={{mt: 2, display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                <TitleBalancefy variant="h4">{props.title}</TitleBalancefy>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <ThumbUpIcon sx={{mr: 1}}/> {props.like}
                </Box>
            </Box>

        </>
    )
}