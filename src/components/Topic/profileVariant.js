import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
import api from '../../service/api';

export default function TopicProfile(props) {
    const [like, setLike] = useState(props.liked);
    const [likes, setLikes] = useState(props.like);
    const data = Math.ceil((new Date().getTime() - new Date(props.date).getTime()) / (1000 * 3600 * 24))
    const navigate = useNavigate()

    const toComments = () => {
        navigate('/comments', {state:props.id});
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
            <div style={{ minHeight: "245px", width: "445px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 style={{
                        fontWeight: 600,
                        color: "#7DE2D1",
                        margin: 0,
                        fontSize: "24px"
                    }}>{props.title}</h2>
                    <EditIcon style={{ cursor: "pointer" }}></EditIcon>
                </div>
                <div style={{
                    marginTop: "1vh",
                    marginBottom: "2vh"
                }}>{props.description}</div>

                <div style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                }}>
                    <div style={{
                        width: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}>
                        <IconButton onClick={()=>{toComments()}}>
                            <CommentIcon></CommentIcon>
                        </IconButton> {props.comment}
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
        </>
    )
}

