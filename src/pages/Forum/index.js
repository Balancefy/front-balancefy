import { Divider, Grid, IconButton, InputBase, Pagination, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Container from "../../components/Container";
import TopicBalancefy from "../../components/Topic";
import ButtonBalancefy from "../../components/Button";
import TitleBalancefy from "../../components/Title";
import { styles } from "./style"
import { Box } from "@mui/system";
import TopicMostLiked from "../../components/TopicMostLiked";
import ModalTopico from "../../components/ModalTopico";
import { useEffect, useState } from "react";
import MainContainer from "../../components/MainContainer";
import api from "../../service/api";

export default function Forum(props) {
    const [modalState, setModalState] = useState(false);
    const [like, setLike] = useState(false);
    const [modalTitle, setModalTitle] = useState("Novo Tópico");
    const [topics, setTopics] = useState([]);
    
    useEffect(() => {
        api.get("/forum")
            .then((res) => {
                setTopics(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const mostLikedPost = [
        {key: 5, title: "Economize ja!", like: "22" },
        {key: 6, title: "Economize ja!", like: "22" },
        {key: 7, title: "Economize ja!", like: "22" },
    ]

    return(
        <>  
            <MainContainer page="Forum" style={{display: "flex", alignItems: "center"}}>
                <Container margin="auto" height="95vh" width="90%" borderRadius={10} >
                    <Box sx={styles.bar}>
                        <Paper component="form" elevation={6} sx={styles.search}>
                            <InputBase placeholder='Pesquisar Tópico' sx={{ml: 2, width: 390}}/>
                            <Divider sx={{border: 2, borderColor: "#131515"}} flexItem orientation="vertical" />
                            <Paper sx={styles.searchIcon}>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                        </Paper>
                        <Grid container sx={styles.barEnd}>
                            <Pagination sx={{mr: 4}} count={10} color="primary" size="small" boundaryCount={0} siblingCount={0}/>
                            <ButtonBalancefy onClick={() => {
                                setModalState(true);
                            }} width="25%">Novo Tópico</ButtonBalancefy>
                        </Grid>
                    </Box>

                    <Grid container sx={{mt: 10, ml:2}}>
                        <Grid item md={2}></Grid>
                        <Grid item md={6} >
                            <div style={styles.topics}>
                                {
                                    topics.map((post) => {
                                        return(
                                            <div key={post.key} style={{marginRight: "5%"}}>
                                                <TopicBalancefy
                                                    title={post.topico.titulo}
                                                    description={post.description}
                                                    avatar={post.avatar}
                                                    name={post.name}
                                                    comment={post.comment}
                                                    like={post.like}
                                                    views={post.views}
                                                    date={post.date}
                                                    liked={like}
                                                    style="forum"
                                                />
                                            </div>
                                        )
                                    })
                                }
                            </div>  
                        </Grid>
                        <Grid item md={1}></Grid>
                        <Grid item md={3}>
                            <TitleBalancefy variant="h2" color="#7DE2D1">Mais Curtidos:</TitleBalancefy>
                            {
                                mostLikedPost.map((post) => {
                                    return(
                                        <div key={post.key}>
                                            <TopicMostLiked  title={post.title} like={post.like}/>
                                        </div>
                                    )
                                })
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