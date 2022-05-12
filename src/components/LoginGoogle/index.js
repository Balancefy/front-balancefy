import logoGoogle from "../../img/google.svg";
import { useGoogleLogin } from 'react-google-login';
import React from "react";
import { AuthContext } from "../../contexts/auth";
import { IconButton } from "@mui/material";
import api from "../../service/api";

const clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE

export default function LoginGoogle(props) {
    const { signInSocial } = React.useContext(AuthContext);

    const onSuccess = (res) => {
        if(props.page === "register") {
            api.post("/users", {
                nome: res.profileObj.name,
                email: res.profileObj.email,
                avatar: res.profileObj.imageUrl,
                type: "GOOGLE"
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            props.onSuccess(res.profileObj.email)
        }
    };

    const onFailure = (res) => {
        props.onFailure()
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        clientId,
        isSignedIn: false,
        onFailure,
        cookiePolicy: "single_host_origin"
    })

    return (
        <>
            <IconButton onClick={signIn}>
                <img alt="gmail" src={logoGoogle} />
            </IconButton>
        </>
    )
}