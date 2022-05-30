import { Divider, Grid, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Container from "../../components/Container";
import TopicBalancefy from "../../components/Topic";
import ButtonBalancefy from "../../components/Button";
import TitleBalancefy from "../../components/Title";
import { styles } from "./style"
import { Box } from "@mui/system";
import TopicMostLiked from "../../components/TopicMostLiked";
import ModalTopico from "../../components/ModalTopico";
import React, { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import api from "../../service/api";

export default function Forum(props) {
    const [modalState, setModalState] = useState(false);
    const [modalTitle, setModalTitle] = useState("Novo Tópico");
    const [topics, setTopics] = React.useState();
    const [mostLikedPost, setMostLiked] = React.useState();
    const [search, setSearch] = React.useState("");

    useEffect(() => {
        if(search === "" || search.length < 3) {
            api.get("/forum")
            .then((res) => {
                setTopics(res.data.list);
            })
            .catch((err) => {
                console.log(err)
            })
        }
    
        api.get("/forum/mostLike")
            .then((res) => {
                setMostLiked(res.data.list);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [topics])

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const searchButton = () => {
        if(search.length >= 3) {
            api.get(`/forum/topics/${search}`)
                .then((res) => {
                    setTopics(res.data.list);
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    return(
        <>  
            <MainContainer page="Forum" style={{display: "flex", alignItems: "center"}}>
                <Container margin="auto" height="95vh" width="90%" borderRadius={10} >
                    <Box sx={styles.bar}>
                        <Paper component="form" elevation={6} sx={styles.search}>
                            <InputBase placeholder='Pesquisar Tópico' sx={{ml: 2, width: 390}} onChange={handleSearch} value={search}/>
                            <Divider sx={{border: 2, borderColor: "#131515"}} flexItem orientation="vertical" />
                            <Paper sx={styles.searchIcon}>
                                <IconButton onClick={searchButton}>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Paper>
                        <Grid container sx={styles.barEnd}>
                            <ButtonBalancefy onClick={() => {
                                setModalState(true);
                            }} width="25%">Novo Tópico</ButtonBalancefy>
                        </Grid>
                    </Box>

                    <Grid container sx={{mt: 10, ml:2}}>
                        <Grid item md={2}></Grid>
                        <Grid item md={6} >
                            <div style={styles.topico}>
                                {
                                    topics !== undefined ? 
                                        topics.map((post) => {
                                            return(
                                                <div key={post.topico.id} style={{marginRight: "5%"}}>
                                                    <TopicBalancefy
                                                        id={post.topico.id}
                                                        title={post.topico.titulo}
                                                        description={post.topico.descricao}
                                                        avatar={post.autor.fkUsuario.avatar}
                                                        name={post.autor.fkUsuario.nome}
                                                        comment={post.commentSize}
                                                        like={post.topico.likes}
                                                        date={post.topico.createdAt}
                                                        liked={post.liked}
                                                        style="forum"
                                                    />
                                                </div>
                                            )
                                        })
                                    : <></>
                                }
                            </div>  
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item md={2}>
                            <TitleBalancefy variant="h2" color="#7DE2D1">Mais Curtidos:</TitleBalancefy>
                            {
                                mostLikedPost !== undefined ? 
                                    mostLikedPost.map((post) => {
                                        return(
                                            <div key={post.topico.id}>
                                                <TopicMostLiked id={post.topico.id} title={post.topico.titulo} like={post.topico.likes}/>
                                            </div>
                                        )
                                    })
                                : 
                                <></>
                            }
                        </Grid>
                    </Grid>
                </Container>
                <ModalTopico 
                    open={modalState}
                    title={modalTitle}
                    onClick={() => {
                        setModalState(false);
                    }}
                />      
                
            </MainContainer>
        </>
    )
}