import Ranking from "../../components/Ranking";
import Container from "../../components/Container";
import { Box, Button, Grid } from "@mui/material";
import Dica from "../../components/Dica";
import Transaction from "../../components/Transaction";
import MainContainer from "../../components/MainContainer";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import BalanceBalancefy from "../../components/Balance";
import GoalsBalancefy from "../../components/EndGoal";
import api from "../../service/api";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Chip from '@mui/material/Chip';



const downloadCsv = (event) => {
    api
        .get('transaction/report', { responseType: 'blob' })
        .then(async (res) => {
            let blob = new Blob([res.data], { type: 'application/csv' })
            let link = document.createElement("a");
            link.href = await URL.createObjectURL(blob);
            link.download = 'movimentacoes.csv'
            link.click()
            URL.revokeObjectURL(link.href)
        })
        .catch((err) => {
            console.log(err);
        });
}

export default function Home() {
    const users = [
        { id: 1, p: 1, name: "Bruno Ferreira", goals: 1, tasks: 23 },
        { id: 2, p: 2, name: "Amanda", goals: 1, tasks: 16 },
        { id: 3, p: 3, name: "Julia Mendes", goals: 1, tasks: 15 },
        { id: 4, p: 4, name: "Lucas Alves", goals: 1, tasks: 14 },
        { id: 5, p: 5, name: "Beatriz Santos", goals: 1, tasks: 13 },
        { id: 6, p: 6, name: "Bruno Ferreira", goals: 1, tasks: 9 },
        { id: 7, p: 7, name: "Amanda", goals: 1, tasks: 8 },
        { id: 8, p: 8, name: "Julia Mendes", goals: 1, tasks: 7 },
        { id: 9, p: 9, name: "Lucas Alves", goals: 1, tasks: 6 },
        { id: 10, p: 10, name: "Ricardo Santos", goals: 1, tasks: 5 }
    ];

    const [transactionType, setTransactionType] = React.useState("");
    const [transactionCategory, setTransactionCategory] = React.useState("");




    return (
        <>
            <MainContainer page="Home">
                <Box className="App" sx={{ display: "flex", alignItems: "flex-start", paddingTop: "30px", width: "100%" }}>
                    <Grid item container>
                        <Grid container item md={4.8} justifyContent={"center"}>
                            <Grid item>
                                <BalanceBalancefy></BalanceBalancefy>
                            </Grid>
                            <Grid item>
                                <Container background="#4B4B4B" height="90px" width="521px" borderRadius="10px" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
                                    <div>
                                        <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                            Movimentações fixas
                                        </h2>
                                        <div style={{ display: "flex" }}>
                                            <Button onClick={downloadCsv} sx={{ height: "3vh", width: "300px" }}>Download CSV</Button>
                                        </div>
                                    </div>
                                </Container>
                            </Grid>

                            <Grid container direction="row" spacing={20} justifyContent={"center"} alignContent={"row"}>
                                <Grid item>
                                    <FormControl sx={{width:"180px",marginTop:"15px", backgroundColor: "#131515"}}>
                                        <InputLabel id="transaction-type">Tipo</InputLabel>
                                        <Select
                                            labelId="transaction-type"
                                            label="Tipo"
                                            value={transactionType}
                                            onChange={(e) => setTransactionType(e.target.value)}
                                        >
                                            <MenuItem value={"Entrada"}>Entrada</MenuItem>
                                            <MenuItem value={"Saída"}>Saída</MenuItem>

                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                <FormControl sx={{width:"180px",marginTop:"15px", backgroundColor: "#131515"}}>
                                        <InputLabel id="transaction-category">Categoria</InputLabel>
                                        <Select
                                            labelId="transaction-category"
                                            label="Categoria"
                                            onChange={(e) => setTransactionCategory(e.target.value)}
                                        >
                                            <MenuItem value={"Lazer"}>Lazer</MenuItem>
                                            <MenuItem value={"Mesada"}>Mesada</MenuItem>
                                        </Select>
                                    </FormControl>
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
                            <Container style={{ display: "flex", height: "100%", width: "560px", justifyContent: "center" }}>
                                <Grid>
                                    <GoalsBalancefy></GoalsBalancefy>
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
                                    <Dica title="Investimento">"Acesse esse site e entenda o básico de investimento: <Link to="/" style={{ color: "#7DE2D1", textDecoration: "none" }}>Investimentos1000</Link></Dica>
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