import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const apiUrl = process.env.REACT_APP_API_URL

function AvatarBalancefy(props) {
    const imagem = (props.imageAvatar).startsWith("/user-photos") ? apiUrl + props.imageAvatar : props.imageAvatar

    return (
    <>
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
    </>
    )
}

export default AvatarBalancefy;

