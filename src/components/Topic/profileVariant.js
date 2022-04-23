import EditIcon from '@mui/icons-material/Edit';
import AvatarBalancefy from '../Avatar';
import CommentIcon from '@mui/icons-material/Comment';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function TopicProfile(props) {
    return (
        <>
            <div style={{ minHeight: "245px", width: "445px", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 style={{
                        fontWeight: 600,
                        color: "#7DE2D1",
                        margin: 0,
                        fontSize: "24px"
                    }}>Economizar Dinheiro</h2>
                    <EditIcon style={{ cursor: "pointer" }}></EditIcon>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <AvatarBalancefy width={"25px"} imageAvatar={props.avatar}></AvatarBalancefy>
                    <Box sx={{ ml: 2, fontSize: "14px", fontWeight: 400 }}>
                        Beatriz Santos
                    </Box>
                </div>
                <div style={{
                    marginTop: "15px",
                    marginBottom: "15px"
                }}>{props.description}</div>

                <div style={{
                    width: "100%",
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
                    <IconButton>
                        <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon>
                    </IconButton> {props.like}
                    <RemoveRedEyeIcon></RemoveRedEyeIcon> {props.views}
                    <AccessTimeIcon></AccessTimeIcon> {props.date}
                </div>
            </div>
        </>
    )
}

