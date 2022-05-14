import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import logoGit from "../../img/github.svg";
import api from "../../service/api";

const client_id = process.env.REACT_APP_CLIENT_ID_GITHUB
const redirect_uri = "http://localhost:3000/cadastro"

export default function LoginGithub(props) {
    const [data, setData] = useState({ errorMessage: ""});
    const { signInSocial, signInUrlGitHub } = React.useContext(AuthContext);

    useEffect(() => {
        const url = window.location.href;
        const hasCode = url.includes("?code=");
    
        if (hasCode) {
          const newUrl = url.split("?code=");
          window.history.pushState({}, null, newUrl[0]);
    
          axios.post("http://localhost:8081/authenticate", {
            code: newUrl[1]
          }).then((res) => {
            onSuccess(res)
          }).catch((err) => {
            console.log(err)
          })
        }
      }, []);

    const onSuccess = (res) => {
        if(props.page === "register") {
            api.post("/users", {
                nome: res.data.name,
                email: res.data.email,
                avatar: res.data.avatar_url,
                type: "GITHUB"
            }).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        } else {
            signInSocial(res.data.email)
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