import Container from "../Container";
import TitleBalancefy from "../Title";
import AvatarBalancefy from "../Avatar";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";

function TopicBalancefy(props) {
    const [like, setLike] = useState(props.liked);
    const [likes, setLikes] = useState(props.like);
    const data = Math.ceil((new Date().getTime() - new Date(props.date).getTime()) / (1000 * 3600 * 24))
    const navigate = useNavigate()

    const toComments = () => {
        navigate('/comments',{state:props.id});
    }

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

    const likeTopic = () => {
        const url = !like ? `like/${props.id}` : `unlike/${props.id}`
        
        api.patch(`/forum/${url}`)
            .then((res) => {
                setLikes(res.data.likes)
            })
            .catch((err) => {
                console.log(err)
            })
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
                            <AvatarBalancefy width={style.sizeImage} imageAvatar={props.avatar}></AvatarBalancefy>
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
                            <IconButton onClick={()=>{toComments()}}>
                                <CommentIcon></CommentIcon>
                            </IconButton> {props.comment !== null ? 0 : props.comment}
                            <IconButton onClick={() => {
                                likeTopic()
                                setLike(!like)
                            }}>
                                {
                                    like ? <ThumbUpIcon></ThumbUpIcon> : <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                                }
                            </IconButton> {likes}
                            <AccessTimeIcon></AccessTimeIcon> {data + "d"}
                        </div>
                    </div>

                    
                </div>

            </Container>
        </>
    )
}

export default TopicBalancefy;