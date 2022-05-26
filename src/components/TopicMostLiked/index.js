import { Box } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TitleBalancefy from "../Title";
import { useNavigate } from "react-router-dom";

export default function TopicMostLiked(props) {
    const navigate = useNavigate()

    const toComments = () => {
        navigate('/comments',{state:props.id});
    }
    
    return (
        <>
            <Box onClick={()=>{toComments()}} sx={{mt: 2, display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}}>
                <TitleBalancefy variant="h4">{props.title}</TitleBalancefy>
                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <ThumbUpIcon sx={{mr: 1}}/> {props.like}
                </Box>
            </Box>
        </>
    )
}