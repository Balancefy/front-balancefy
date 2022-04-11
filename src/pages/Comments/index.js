import { Divider, Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Container from "../../components/Container";
import MainContainer from "../../components/MainContainer";
import SpeedAdd from "../../components/SpeedAdd";
import TitleBalancefy from "../../components/Title";
import TopicBalancefy from "../../components/Topic";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TopicWithComments from "../../components/TopicWithComments";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import AvatarBalancefy from "../../components/Avatar";
import CommentBalancefy from "../../components/Comment";

export default function Comments(props) {
    const topics = [
        {
            key: 1,
            title: "Economizar dinheiro",
            description: "Como vocës fazem para não gastar o dinheiro assim que ele cai na conta? Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.",
            avatar: "BS",
            name: "Beatriz Santos",
            comment: "11",
            like: "11",
            views: "11",
            date: "2d"
        },
        {
            key: 2,
            title: "Economizar dinheiro",
            description: "Como vocës fazem para não gastar o dinheiro assim que ele cai na conta? Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.",
            avatar: "BS",
            name: "Beatriz Santos",
            comment: "11",
            like: "11",
            views: "11",
            date: "2d"
        },
    ]

    const post = {
        key: 1,
        title: "Economizar dinheiro",
        description: "Como vocës fazem para não gastar o dinheiro assim que ele cai na conta? Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.",
        avatar: "BS",
        name: "Beatriz Santos",
        comment: "11",
        like: "11",
        views: "11",
        date: "2d"
    }

     return(
         <>
            <MainContainer>
                <Container margin="auto" height="95vh" width="90%" borderRadius={10} >
                    <Box sx={{display: "flex", alignItems: "center", mt: 4, ml: 4}}>
                            <Link to="/forum">
                                <IconButton sx={{mr: 4}}>
                                    <ArrowBackIcon color="primary" fontSize="large"/>
                                </IconButton>
                            </Link>
                        
                        <TitleBalancefy variant="h2" color="#7DE2D1">{post.title}</TitleBalancefy>
                    </Box>

                    <Grid container sx={{mt: 2, ml:2}}>
                        <Grid item md={1.5}></Grid>
                        <Grid item md={5} sx={{mt: 10}}>
                            <div>
                                <TopicWithComments
                                    description={post.description}
                                    avatar={post.avatar}
                                    name={post.name}
                                    comment={post.comment}
                                    like={post.like}
                                    views={post.views}
                                    date={post.date}
                                />
                            </div>  

                            <Box sx={{display: "flex", alignItems: "center", mt: 4, ml: 4}}>
                                <AvatarBalancefy width="45px"/>
                                <Box sx={{ml: 2, width: "85%"}}>
                                    <Input label="Adicione um comentario" width="100%"/>
                                </Box>
                            </Box>
                            
                            <Box sx={{mt: 2, ml: 4}}>
                                <CommentBalancefy></CommentBalancefy>
                                <CommentBalancefy></CommentBalancefy>
                            </Box>

                        </Grid>
                        <Grid item md={0.5}>
                        </Grid>
                        <Grid item md={0.5}>
                            <div style={{border: '1px solid #4B4B4B', height: '80vh', width: 0}}></div>
                        </Grid>
                        <Grid item md={4} sx={{mt: 4}}>
                            <Box sx={{mb: 6}}>
                                <TitleBalancefy variant="h2" color="#7DE2D1">Publicações como esta:</TitleBalancefy>
                            </Box>
                            {
                                topics.map((post) => {
                                    return(
                                        <div key={post.key}>
                                            <TopicBalancefy
                                                title={post.title}
                                                description={post.description}
                                                avatar={post.avatar}
                                                name={post.name}
                                                comment={post.comment}
                                                like={post.like}
                                                views={post.views}
                                                date={post.date}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>

                    <SpeedAdd/>

                </Container>
            </MainContainer>
         </>
     )
}