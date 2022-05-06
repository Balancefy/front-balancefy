// import { IconButton } from "@mui/material";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { AuthContext } from "../../contexts/auth";
// import logoGit from "../../img/github.svg";
// import api from "../../service/api";

// const client_id = process.env.REACT_APP_CLIENT_ID_GITHUB
// const redirect_uri = "http://localhost:3000/cadastro"

// export default function LoginGithub(props) {
//     const [data, setData] = useState({ errorMessage: ""});
//     const { signInSocial, signInUrlGitHub } = React.useContext(AuthContext);

//     // useEffect(() => {
//     //     const url = window.location.href;
//     //     const hasCode = url.includes("?code=");
    
//     //     if (hasCode) {
//     //       const newUrl = url.split("?code=");
//     //       window.history.pushState({}, null, newUrl[0]);
    
//     //       axios.post("https://github.com/login/oauth/access_token", {
//     //         code: newUrl[1]
//     //       }).then((res) => {
//     //           console.log(res)
//     //       }).catch((err) => {
//     //           console.log(err)
//     //       })

//         //   fetch(proxy_url, {
//         //     method: "POST",
//         //     body: JSON.stringify(requestData)
//         //   })
//         //     .then(response => response.json())
//         //     .then(data => {
//         //       dispatch({
//         //         type: "LOGIN",
//         //         payload: { user: data, isLoggedIn: true }
//         //       });
//         //     })
//         //     .catch(error => {
//         //       setData({
//         //         isLoading: false,
//         //         errorMessage: "Sorry! Login failed"
//         //       });
//         //     });
//         }
//     //   }, []);

//     // const onSuccess = (res) => {
//     //     if(props.page === "register") {
//     //         api.post("/users", {
//     //             nome: res.profileObj.name,
//     //             email: res.profileObj.email,
//     //             avatar: res.profileObj.imageUrl,
//     //             type: "GITHUB"
//     //         }).then((res) => {
//     //             console.log(res)
//     //         }).catch((err) => {
//     //             console.log(err)
//     //         })
//     //     } else {
//     //         signInSocial(res.profileObj.email)
//     //     }
//     // };

//     return (
//         <>
//             <IconButton>
//                 <a style={{decoration: "none"}} href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}`}>
//                     <img alt="github" src={logoGit} />
//                 </a>
//             </IconButton>
//         </>
//     )
// }