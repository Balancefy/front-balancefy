import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Container from "../../components/Container";
import MainContainer from "../../components/MainContainer";
import TitleBalancefy from "../../components/Title";
import TopicBalancefy from "../../components/Topic";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TopicWithComments from "../../components/TopicWithComments";
import { Link, useLocation } from "react-router-dom";
import CommentsSection from "../../components/CommentsSection";
import AddComment from "../../components/AddComment";
import React, { useEffect, useState } from "react";
import api from "../../service/api"

export default function Comments(props) {
    const location = useLocation();
    const postId = location.state
    const [post, setPost] = useState();
    const [similarPost, setSimilarPost] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const [newComment, setNewComment] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        api.get(`/forum/${postId}`)
            .then((res) => {
                setPost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        api.get(`/comentario/${postId}`)
            .then((res) => {
                setComentarios(res.data.list)
            })
            .catch((err) => {
                console.log(err);
            })


        // if (post !== undefined && post !== "") {
        //     api.get(`/forum/topics/${(post.topico.titulo).slice(0, 4)}`)
        //         .then((res) => {
        //             console.log(res)
        //             setSimilarPost(res.data.list);
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })

        // }
    }, [newComment])

    const replyTopic = () => {
        api.post("/comentario", {
          idTopico: postId,
          conteudo: message,
        })
          .then((res)=> {
            setNewComment(true)
            setMessage("")
            console.log(res);
          })
          .catch(err => {
    
          })
      }

    return (
        <>
            <MainContainer page="Forum">
                <Container margin="auto" height="95vh" width="90%" borderRadius={10} >
                    <Box sx={{ display: "flex", alignItems: "center", mt: 4, ml: 4 }}>
                        <Link to="/forum">
                            <IconButton sx={{ mr: 4 }}>
                                <ArrowBackIcon color="primary" fontSize="large" />
                            </IconButton>
                        </Link>

                        {
                            post !== undefined && post !== "" ?
                                <TitleBalancefy variant="h2" color="#7DE2D1">{post.topico.titulo}</TitleBalancefy>
                                :
                                <></>
                        }
                    </Box>

                    <Grid container sx={{ mt: 2, ml: 2 }}>
                        <Grid item md={2}></Grid>
                        <Grid item md={5} sx={{ mt: 10 }}>
                            <div>
                                {
                                    post !== undefined && post !== "" ?
                                        <TopicWithComments
                                            id={post.topico.id}
                                            description={post.topico.descricao}
                                            avatar={post.autor.fkUsuario.avatar}
                                            name={post.autor.fkUsuario.nome}
                                            comment={comentarios.length}
                                            likes={post.topico.likes}
                                            liked={post.liked}
                                            date={post.topico.createdAt}
                                        />
                                        :
                                        <></>
                                }
                            </div>

                            <Box sx={{ width: "100%" }}>
                                <AddComment onChange={(event) => {setMessage(event.target.value)}} value={message} replyAction={() => replyTopic()}/>
                            </Box>

                            <Box sx={{ ml: 4 }}>
                                <CommentsSection topicId={1} comments={!!comentarios ? comentarios : []} />
                            </Box>

                        </Grid>
                        <Grid item md={1}>
                        </Grid>
                        <Grid item md={1}>
                            <div style={{ border: '1px solid #4B4B4B', height: '80vh', width: 0 }}></div>
                        </Grid>
                        <Grid item md={2} sx={{ mt: 4 }}>
                            {/* <Box sx={{ mb: 6 }}>
                                <TitleBalancefy variant="h2" color="#7DE2D1">Publicações como esta:</TitleBalancefy>
                            </Box>
                            <div style={{
                                maxHeight: "70vh",
                                overflow: "auto",
                            }}>
                                {
                                    similarPost !== undefined ?
                                        similarPost.map((post) => {
                                            return (
                                                <div key={post.topico.id} style={{ marginRight: "5%" }}>
                                                    <TopicBalancefy
                                                        id={post.topico.id}
                                                        title={post.topico.titulo}
                                                        description={post.topico.descricao}
                                                        avatar={post.autor.fkUsuario.avatar}
                                                        name={post.autor.fkUsuario.nome}
                                                        comment={post.comment}
                                                        like={post.topico.likes}
                                                        date={post.topico.createdAt}
                                                        liked={post.liked}
                                                        style="forum"
                                                    />
                                                </div>
                                            )
                                        })
                                        :
                                        <></>
                                }
                            </div> */}
                        </Grid>
                    </Grid>
                </Container>
            </MainContainer>
        </>
    )
}