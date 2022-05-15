import { IconButton } from "@mui/material";
import React from "react";
import FacebookLogin from "react-facebook-login";
import "./login.css"

const client_id = process.env.REACT_APP_APP_ID_FACEBOOK

export default function LoginFacebook(props) {

    const responseFacebook = (res) => {
        if(props.page === "register") {
            props.onSuccess(res)
        } else {
            props.onSuccess(res.email)
        }
    }

    return (
        <>
            <IconButton>
                <FacebookLogin
                  appId={client_id}
                  autoLoad={true}
                  fields="name, email, picture"
                  scope="public_profile email"
                  callback={responseFacebook}
                  textButton=""
                  size="small" />
            </IconButton>
        </>
    )
}