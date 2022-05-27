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
    
          axios.post("https://node-server-balancefy.herokuapp.com/authenticate", {
            code: newUrl[1]
          }).then((res) => {
            onSuccess(res)
          }).catch((err) => {
            console.log(err)
            props.onFailure()
          })
        }
      }, []);

    const onSuccess = (res) => {
        props.onSuccess(res.profileObj.email)
        if(props.page === "register") {
            props.onSuccess(res)
        } else {
            props.onSuccess(res.data.email)
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