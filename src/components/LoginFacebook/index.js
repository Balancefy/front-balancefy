import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import { AuthContext } from "../../contexts/auth";
import logoFacebook from "../../img/facebook.svg";
import api from "../../service/api";
import "./login.css"

const client_id = process.env.REACT_APP_APP_ID_FACEBOOK
const redirect_uri = "http://localhost:3000/cadastro"

export default function LoginFacebook(props) {
    const { signInSocial } = React.useContext(AuthContext);

    const responseFacebook = (res) => {
        console.log(res)
        if(props.page === "register") {
            api.post("/users", {
                nome: res.name,
                email: res.email,
                avatar: res.picture.data.url,
                type: "FACEBOOK"
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            signInSocial(res.email)
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