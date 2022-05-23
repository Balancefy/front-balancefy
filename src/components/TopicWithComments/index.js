import Container from "../Container";
import TitleBalancefy from "../Title";
import AvatarBalancefy from "../Avatar";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL

function TopicWithComments(props) {
    const [like, setLike] = useState(false);

    return (
        <>
            <Container backgroundColor="#131515" height="222px" width={props.width} borderRadius="10px">
                <div style={{
                    width: "90%",
                    height: "100%",
                    margin: "auto",
                }}>
                    <div style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <AvatarBalancefy width="50px" imageAvatar={apiUrl + props.avatar}></AvatarBalancefy>
                        <Box sx={{ml: 2}}>
                            <TitleBalancefy variant="subtitle1">
                                {props.name}
                            </TitleBalancefy>
                        </Box>
                        
                    </div>

                    <div style={{
                        paddingTop: "5%"
                    }}>
                        <TitleBalancefy variant="body1" color="#FFF">{props.description}</TitleBalancefy>
                    </div>

                    <div style={{
                        paddingTop: "5%",
                        display: "flex",
                    }}>
                        <Box sx={{display: "flex", alignItems: "center", mr: 2}} >
                            <Link to="/comments">
                                <IconButton sx={{mr: 1}}>
                                        <CommentIcon></CommentIcon> 
                                </IconButton>
                            </Link>
                            {props.comment}
                        </Box>

                        <Box sx={{display: "flex", alignItems: "center", mr: 2}}>
                            <IconButton sx={{mr: 1}} onClick={() => {setLike(!like)}}>
                                {
                                    like ? <ThumbUpIcon></ThumbUpIcon> : <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                                }
                            </IconButton>
                            {props.like}
                        </Box>

                        <Box sx={{display: "flex", alignItems: "center", mr: 2}}>
                            <AccessTimeIcon sx={{mr: 1}}></AccessTimeIcon> {props.date}
                        </Box>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default TopicWithComments;