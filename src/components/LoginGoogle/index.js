import logoGoogle from "../../img/google.svg";
import GoogleLogin, { useGoogleLogin } from 'react-google-login';
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

    return (
        <>
            <IconButton>
                <GoogleLogin
                  clientId={clientId}
                  render={renderProps => (
                    <img onClick={renderProps.onClick} disabled={renderProps.disabled} src={logoGoogle}/>
                  )}
                  buttonText=""
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}/>
            </IconButton>
        </>
    )
}