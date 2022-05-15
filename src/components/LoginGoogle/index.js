import logoGoogle from "../../img/google.svg";
import { useGoogleLogin } from 'react-google-login';
import React from "react";
import { IconButton } from "@mui/material";

const clientId = process.env.REACT_APP_CLIENT_ID_GOOGLE

export default function LoginGoogle(props) {

    const onSuccess = (res) => {
        if(props.page === "register") {
            props.onSuccess(res)
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
        isSignedIn: true,
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