import { IconButton } from "@mui/material";
import React from "react";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import logoFacebook from "../../img/facebook.svg";

const client_id = process.env.REACT_APP_APP_ID_FACEBOOK

export default function LoginFacebook(props) {

    const responseFacebook = (res) => {
        if(props.page === "register") {
            props.onSuccess(res, "FACEBOOK")
        } else {
            props.onSuccess(res.email)
        }
    }

    return (
        <>
            <FacebookLogin
                appId={client_id}
                fields="name, email, picture"
                scope="public_profile email"
                callback={responseFacebook}
                textButton=""
                render={renderProps => (
                    <IconButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <img src={logoFacebook}/>
                    </IconButton>
                )}
                size="small" 
            />
        </>
    )
}