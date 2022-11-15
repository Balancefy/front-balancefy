import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { Button } from "@mui/material";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ModalProfile from '../ModalProfile';
import { AuthContext } from "../../contexts/auth";
const bucketUrl = process.env.REACT_S3_BUCKET_URL

function AvatarBalancefy(props) {
    const imagem = bucketUrl + props.imageAvatar 
    const editing = props.editing;
    const [open, setOpen] = useState(false);
    const { user } = React.useContext(AuthContext);


    return (
        <>
        <div style={{ width: props.width, height: "fit-content", position: "relative", borderRadius: "50%" }}>
                <Avatar onClick={props.onClick} src={imagem}
                    style={{
                        width: props.width,
                        height: props.width,
                        backgroundColor: "#7DE2D1",
                        border: "2px solid Black",
                        borderRadius: "50%",
                        ...props.style
                    }}>
                    {props.children}
                </Avatar>
                {editing &&
                    <Button
                        variant="contained"
                        color={"secondary"}
                        onClick={() => setOpen(true)}
                        sx={{
                            height: "60px",
                            width: "60px",
                            borderRadius: "50%",
                            position: "absolute",
                            color: "#fff",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            bottom: 0,
                            fontSize: "30px",
                            right: 30
                        }}>
                        <CameraAltIcon fontSize="inherit" />
                    </Button>
                }
                <ModalProfile src={imagem} closeAction={() => setOpen(false)} open={open}/>
            </div>
        </>
    )
}

export default AvatarBalancefy;

