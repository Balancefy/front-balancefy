import Ranking from "../../components/Ranking";
import Container from "../../components/Container";
import { Box, Grid } from "@mui/material";
import Dica from "../../components/Dica";
import Transaction from "../../components/Transaction";
import MainContainer from "../../components/MainContainer";

export default function Home() {
    const users = [
        { id: 1, p: 1, name: "Bruno Ferreira", goals: 1, tasks: 13 },
        { id: 2, p: 2, name: "Amanda", goals: 1, tasks: 13 },
        { id: 3, p: 3, name: "Julia Mendes", goals: 1, tasks: 13 },
        { id: 4, p: 4, name: "Lucas Alves", goals: 1, tasks: 13 },
        { id: 5, p: 5, name: "Beatriz Santos", goals: 1, tasks: 1 },
        { id: 6, p: 1, name: "Bruno Ferreira", goals: 1, tasks: 13 },
        { id: 21, p: 2, name: "Amanda", goals: 1, tasks: 13 },
        { id: 31, p: 3, name: "Julia Mendes", goals: 1, tasks: 13 },
        { id: 41, p: 4, name: "Lucas Alves", goals: 1, tasks: 13 },
        { id: 51, p: 5, name: "Beatriz Santos", goals: 1, tasks: 1 }
    ]

    return (
        <>
            <MainContainer>
                <Box className="App" sx={{ display: "flex", alignItems: "flex-start", paddingTop: "30px", width: "100%" }}>
                    <Grid item container>
                        <Grid container item md={4.8} justifyContent={"center"}>
                            <Grid item>
                                <Container background="#4B4B4B" height="291px" width="521px" borderRadius="10px">
                                    <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Saldo Atual em Conta
                                    </h2>
                                </Container>
                            </Grid>
                            <Grid item>
                                <Container background="#4B4B4B" height="90px" width="521px" borderRadius="10px">
                                    <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Movimentações fixas
                                    </h2>
                                </Container>
                            </Grid>

                            <Grid container direction="row" spacing={20} justifyContent={"center"} alignContent={"row"}>
                                <Grid item>
                                    <Container background="#4B4B4B" height="50px" width="180px" borderRadius="10px">
                                        <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                            Entrada
                                        </h3>
                                    </Container>
                                </Grid>
                                <Grid item>
                                    <Container background="#4B4B4B" height="50px" width="180px" borderRadius="10px">
                                        <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                            Lazer
                                        </h3>
                                    </Container>
                                </Grid>
                            </Grid>

                            <Grid container item justifyContent={"center"}>
                                <Grid item >
                                    <Grid container item direction={"row"} alignItems={"center"}>
                                        <Grid item md={4}>
                                            <Transaction category="Lazer" type="out" title="Netflix">50,00</Transaction>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Transaction category="Mesada" type="in" title="Mesada">50,00</Transaction>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Transaction category="Mesada" type="in" title="Mesada">50,00</Transaction>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container item justifyContent={"center"}>
                                <Grid item >
                                    <Grid container item direction={"row"} alignItems={"center"}>
                                        <Grid item md={4}>
                                            <Transaction category="Lazer" type="out" title="Netflix">50,00</Transaction>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Transaction category="Mesada" type="in" title="Mesada">50,00</Transaction>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Transaction category="Mesada" type="in" title="Mesada">50,00</Transaction>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container item justifyContent={"center"}>
                                <Grid item >
                                    <Grid container item direction={"row"} alignItems={"center"}>
                                        <Grid item md={4}>
                                            <Transaction category="Lazer" type="out" title="Netflix">50,00</Transaction>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Transaction category="Mesada" type="in" title="Mesada">50,00</Transaction>
                                        </Grid>
                                        <Grid item md={4}>
                                            <Transaction category="Mesada" type="in" title="Mesada">50,00</Transaction>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item container md={5.2}>
                            <Container style={{display:"flex", height:"100%",width:"560px", justifyContent:"center"}}>
                                <Grid>
                                    <Container height="64px" width="480px" borderRadius="10px" backgroundColor="#4B4B4B">
                                        <div style={{display:"flex", width: "480px", height: "64px", margin: "40px", textAlign: "center", color: "#7DE2D1"}}>
                                            <h3>
                                                COMPRAR PC GAMER
                                            </h3>
                                        </div>
                                    </Container>
                                </Grid>
                            </Container>
                        </Grid>


                        <Grid container item md={1} justifyContent={"center"} spacing={3}>
                            <Grid item>
                                <Container background="#4B4B4B" height="570px" width="380px" borderRadius="10px">
                                    <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Dicas Para Você
                                    </h2>
                                    <Dica title="Economia">Procure por trajetos de ônibus para economizar 50% dos seus gastos, que são utilizados em Uber</Dica>
                                    <Dica title="Investimento">“Investimentos em Tesouro Selic te trarão 20% de rendimento ao ano” </Dica>
                                    <Dica title="Investimento">"Acesse esse site e entenda o básico de investimento: <a href='www.google.com'>Investimentos1000”</a></Dica>
                                </Container>
                            </Grid>
                            <Grid item>
                                <Ranking data={users} marginTop="150px"></Ranking>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </MainContainer>

        </>
    );
}