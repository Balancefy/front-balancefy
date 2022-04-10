import Menu from "../../components/Menu";
import Ranking from "../../components/Ranking";
import Container from "../../components/Container";
import { Box, Grid } from "@mui/material";
import Dica from "../../components/Dica"

export default function Home() {
    const users = [
        { id: 1, p: 1, name: "Bruno Ferreira", goals: 1, tasks: 13 },
        { id: 2, p: 2, name: "Amanda", goals: 1, tasks: 13 },
        { id: 3, p: 3, name: "Julia Mendes", goals: 1, tasks: 13 },
        { id: 4, p: 4, name: "Lucas Alves", goals: 1, tasks: 13 },
        { id: 5, p: 5, name: "Beatriz Santos", goals: 1, tasks: 1 },
        { id: 1, p: 1, name: "Bruno Ferreira", goals: 1, tasks: 13 },
        { id: 2, p: 2, name: "Amanda", goals: 1, tasks: 13 },
        { id: 3, p: 3, name: "Julia Mendes", goals: 1, tasks: 13 },
        { id: 4, p: 4, name: "Lucas Alves", goals: 1, tasks: 13 },
        { id: 5, p: 5, name: "Beatriz Santos", goals: 1, tasks: 1 }
    ]

    return (
        <>
            <Box className="App" sx={{ display: "flex", alignItems: "flex-start", direction: "row"}}>
                <Menu></Menu>
                <Grid Item container>
                    <Grid item md={4}>
                        <Grid Item>
                            <Container background="#4B4B4B" height="291px" width="560px" borderRadius="10px">
                                <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                    Saldo Atual em Conta
                                </h2>
                            </Container>
                        </Grid>
                        <Grid Item>
                            <Container background="#4B4B4B" height="90px" width="560px" borderRadius="10px">
                                <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                    Movimentações fixas
                                </h2>
                            </Container>
                        </Grid>

                        <Grid container spacing={1} direction="row">
                            <Grid Item>
                                <Container background="#4B4B4B" height="50px" width="180px" borderRadius="10px">
                                    <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Entrada
                                    </h3>
                                </Container>
                            </Grid>
                            <Grid Item item>
                                <Container background="#4B4B4B" height="50px" width="180px" borderRadius="10px">
                                    <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Lazer
                                    </h3>
                                </Container>
                            </Grid>
                        </Grid>


                        <Grid container direction="row" justifyContent="flex-start">
                            <Grid item container>
                                <Container background="#4B4B4B" height="127px" width="180px" borderRadius="10px">
                                    <h4 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        #Lazer
                                    </h4>
                                    <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Netflix
                                    </h3>
                                </Container>
                            </Grid>
                            <Grid container item>
                                <Container background="#4B4B4B" height="127px" width="180px" borderRadius="10px">
                                    <h4 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        #Lazer
                                    </h4>
                                    <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Netflix
                                    </h3>
                                </Container>
                            </Grid>
                            <Grid container item>
                                <Container background="#4B4B4B" height="127px" width="180px" borderRadius="10px">
                                    <h4 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        #Lazer
                                    </h4>
                                    <h3 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                        Netflix
                                    </h3>
                                </Container>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container md={4}>
                        <Container background="#4B4B4B" height="1013px" width="560px" borderRadius="10px">

                        </Container>
                    </Grid>


                    <Grid item container md={4}>
                        <Grid item>
                            <Container background="#4B4B4B" height="620px" width="380px" borderRadius="10px">
                                <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                    Dicas Para Você
                                </h2>
                                <Dica title="Economia">Procure por trajetos de ônibus para economizar 50% dos seus gastos, que são utilizados em Uber</Dica>
                                <Dica title="Investimento">“Investimentos em Tesouro Selic te trarão 20% de rendimento ao ano” </Dica>
                                <Dica title="Investimento">"Acesse esse site e entenda o básico de investimento: <a href='www.google.com'>Investimentos1000”</a></Dica>
                            </Container>
                        </Grid>
                        <Grid item>
                            <Container background="#4B4B4B" height="372px" width="380px" borderRadius="10px">
                                <Ranking data={users} marginTop="100px"></Ranking>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}