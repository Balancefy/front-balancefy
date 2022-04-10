import { Box } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TitleBalancefy from "../Title";

export default function TopicMostLiked(props) {
    return (
        <Box sx={{display: "flex", alignItems: "center", mt: 2,  ml: 2}}>
            <TitleBalancefy variant="h4">{props.title}</TitleBalancefy>
            <Box sx={{display: "flex", alignItems: "center", ml: 12}}>
                <ThumbUpIcon sx={{mr: 1}}/> {props.like}
            </Box>
        </Box>
    )
}