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
    const [transactions, setTransactions] = React.useState();
    const [dicas, setDicas] = React.useState([]);
    const [selectedGoal, setSelectedGoal] = React.useState(-1);
    const [accountGoals, setAccountGoals] = React.useState([]);
    const [currentGoal, setCurrentGoal] = React.useState();

    useEffect(() => {
        api.get(`transactionFixed/${1}`)
            .then(res => {
                setTransactions(res.data);
            }).catch(err => {
                console.log(err);
            })

        api.get("/dicas")
            .then((res) => {
                setDicas(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        
        api.get("accounts/goals")
            .then(res => {
                setAccountGoals(res.data)
                setSelectedGoal(Array.from(res.data).find(it => !!it == true ).id)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        if(selectedGoal != -1){
            api.get(`/accounts/goals/${selectedGoal}`)
                .then(res => {
                    setCurrentGoal({ objetivo: res.data.objetivo, tasks: Array.from(res.data.tasks).reverse() })
                }).catch(err => {
                    console.log(err);
                })
        }
    },[selectedGoal])


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
                                    <Container background="#4B4B4B" height="90px" width="100%" borderRadius="10px" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "20px" }}>
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
                                    <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: "521px", maxWidth: "540px" }}>
                                        {
                                            transactions != undefined ?
                                                transactions.map((transaction) => (
                                                    <Transaction 
                                                        key={transaction.id} 
                                                        category={transaction.categoria} 
                                                        type={transaction.tipo == "Entrada" ? "in" : "out"} 
                                                        title={transaction.descricao}>
                                                        {transaction.valor}
                                                    </Transaction>
                                                )) : <></>
                                        }
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item height="100%" >
                            <Container style={{ display: "flex", height: "100%", width: "560px", justifyContent: "center", overflow: "hidden" }}>
                                <Grid>
                                    <GoalsBalancefy data={accountGoals} value={selectedGoal} onChange={(event) => setSelectedGoal(event.target.value) }/>
                                    {
                                    currentGoal != undefined ? <ObjFinal
                                        title={currentGoal.objetivo.categoria}
                                        desc={currentGoal.objetivo.descricao}
                                        xp={currentGoal.objetivo.pontuacao +"XP"}
                                        metas={`${Array.from(currentGoal.tasks).filter(it => it.done == 1).length}/${currentGoal.tasks.length}`}
                                        tasks={currentGoal.tasks}
                                    >
                                    </ObjFinal> :          
                                     <Container style={{ height: "30%", width: "100%", backgroundColor: "#4B4B4B", marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}> 
                                        <div style={{
                                            color: "#7DE2D1",
                                            fontSize: "30px"
                                        }}>Loading...</div>
                                     </Container>

                                    }
                                    
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
                                        {
                                            dicas.map((dica) => {
                                                return (
                                                    <Dica title={dica.titulo}>{dica.descricao}</Dica>
                                                )
                                            })
                                        } 
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
