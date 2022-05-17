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
import ObjFinal from "../../components/ObjFinal";



const downloadCsv = (event) => {
    api
        .get('transaction/report', { responseType: 'blob' })
        .then(async (res) => {
            let blob = new Blob([res.data], { type: 'text/plain' })
            let link = document.createElement("a");
            link.href = await URL.createObjectURL(blob);
            link.download = 'movimentacoes.txt'
            link.click()
            URL.revokeObjectURL(link.href)
        })
        .catch((err) => {
            console.log(err);
        });
}

export default function Home() {

    const transactions = [
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" },
        { id: 1, category: "Mesada", type: "in", title: "Mesada" }
    ]


    const [transactionType, setTransactionType] = React.useState("");
    const [transactionCategory, setTransactionCategory] = React.useState("");

    return (
        <>
            <MainContainer page="Home">
                <Box className="App" sx={{ display: "flex", alignItems: "flex-start", paddingTop: "30px", width: "100%" }}>
                    <Grid container height="100%" spacing={4} direction="row" justifyContent="space-evenly" alignItems="flex-start">
                        <Grid item >
                            <Grid container direction="column">
                                <Grid item>
                                    <BalanceBalancefy></BalanceBalancefy>
                                </Grid>
                                <Grid item>
                                    <Container background="#4B4B4B" height="90px" width="100%" borderRadius="10px" style={{ display: "flex", alignItems: "center", justifyContent: "center",marginTop: "20px" }}>
                                        <div>
                                            <h2 style={{ textAlign: "center", paddingTop: "5px", margin: 0 }}>
                                                Movimentações fixas
                                            </h2>
                                            <div style={{ display: "flex" }}>
                                                <Button onClick={downloadCsv} sx={{ height: "3vh", width: "300px" }}>Download CSV</Button>
                                            </div>
                                        </div>
                                    </Container>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                        <FormControl sx={{ width: "180px", marginTop: "15px", backgroundColor: "#131515" }}>
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
                                        <FormControl sx={{ width: "180px", marginTop: "15px", backgroundColor: "#131515" }}>
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
                                    </Box>
                                    <Box sx={{display:"flex", flexWrap: "wrap", minWidth: "521px",maxWidth:"540px"}}>
                                    {transactions.map((transaction) => (<Transaction/>))}
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item height="100%" >
                            <Container style={{ display: "flex", height: "100%", width: "560px", justifyContent: "center" }}>
                                <Grid>
                                    <GoalsBalancefy></GoalsBalancefy>
                                    <ObjFinal 
                                        title="Comprar todas peças do PC" 
                                        desc="Quitar todas as parcelas da casa"
                                        xp="2000xp"
                                        metas="1/9"
                                        tasks={[{}]}
                                        >
                                    </ObjFinal>
                                </Grid>
                                <Grid>

                                </Grid>
                            </Container>
                        </Grid>

                        <Grid item height="100%">
                            <Grid height="100%" container direction="column" justifyContent="space-between">
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
                                    <Ranking marginTop="150px"></Ranking>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </MainContainer>
        </>
    );
}
