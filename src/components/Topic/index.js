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

function TopicBalancefy(props) {
    const [like, setLike] = useState(false);

    const style = props.style === "forum" ? 
        {
            variantTitle: 'h2',
            variant: 'body1',
            sizeImage: '50px',
        } : {
            variantTitle: 'h3',
            variant: 'body2',
            sizeImage: '35px',
        }

    return (
        <>
            <Container backgroundColor="#131515" height="222px" width={props.width} borderRadius="10px">
                <div style={{
                    width: "90%",
                    height: "100%",
                }}>
                    <div style={{
                    }}>
                        <TitleBalancefy variant={style.variantTitle} color="#7DE2D1">{props.title}</TitleBalancefy>
                    </div>

                    <div style={{
                        paddingTop: "15px"
                    }}>
                        <TitleBalancefy variant={style.variant} color="#FFF">{props.description}</TitleBalancefy>
                    </div>

                    <div style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}>

                        <div style={{
                            width: "60%",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <AvatarBalancefy width={style.sizeImage} imageAvatar={apiUrl + props.avatar}></AvatarBalancefy>
                            <Box sx={{ml: 2}}>
                                <TitleBalancefy variant={style.variant}>
                                    {props.name}
                                </TitleBalancefy>
                            </Box>
                        </div>

                        <div style={{
                            width: "50%",
                            height: "75px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            paddingLeft: "70px"
                        }}>
                            <Link to="/comments">
                                <IconButton>
                                    <CommentIcon></CommentIcon>
                                </IconButton>
                            </Link> {props.comment}
                            <IconButton onClick={() => {setLike(!like)}}>
                                {
                                    like ? <ThumbUpIcon></ThumbUpIcon> : <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                                }
                            </IconButton> {props.like}
                            <AccessTimeIcon></AccessTimeIcon> {props.date}
                        </div>
                    </div>

                    
                </div>

            </Container>
        </>
    )
}

export default TopicBalancefy;