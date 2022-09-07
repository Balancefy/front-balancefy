import { Code } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import logoGit from "../../img/github.svg";

const client_id = process.env.REACT_APP_CLIENT_ID_GITHUB

export default function LoginGithub(props) {
    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("?code=");
    
        if (hasCode) {
          const newUrl = url.split("?code=");
          window.history.pushState({}, null, newUrl[0]);
    
          console.log(newUrl[1])
          axios.post("https://node-server-balancefy.herokuapp.com/authenticate", {
            code: newUrl[1],
            page: props.page === "register" ? "Cadastro" : "Login"
          }).then((res) => {
            console.log(res)
            onSuccess(res)
          }).catch((err) => {
            console.log(err)
            props.onFailure()
          })
        }
      }, []);

    const onSuccess = (res) => {
        if(props.page === "register") {
            props.onSuccess(res.data, "GITHUB")
        } else {
            props.onSuccess(res.data.login)
        }
    };

    return (
        <>
            <IconButton>
                <a style={{fontSize: '0'}} href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}`}>
                    <img style={{fontSize: '0'}} alt="github" src={logoGit} />
                </a>
            </IconButton>
        </>
    )
}