import Ranking from "../../components/Ranking";
import Container from "../../components/Container";
import { Box, Button, Grid } from "@mui/material";
import Dica from "../../components/Dica";
import Transaction from "../../components/Transaction";
import MainContainer from "../../components/MainContainer";
import React, { useEffect } from "react";
import BalanceBalancefy from "../../components/Balance";
import GoalsBalancefy from "../../components/EndGoal";
import api from "../../service/api";
import FormControl from '@mui/material/FormControl';
import ObjFinal from "../../components/ObjFinal";
import SelectBalancefy from "../../components/Select";
import TitleWithBorder from "../../components/TitleWithBorder";


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
const uploadTxt = (event) => {
    console.log("TEST");
    // api
    //     .get('/transactionFixed', { responseType: 'blob' })
    //     .then(async (res) => {
    //         let blob = new Blob([res.data], { type: 'text/plain' })
    //         let link = document.createElement("a");
    //         link.href = await URL.createObjectURL(blob);
    //         link.download = 'movimentacoes.txt'
    //         link.click()
    //         URL.revokeObjectURL(link.href)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
}

export default function Home() {
    const [transactions, setTransactions] = React.useState();
    const [dicas, setDicas] = React.useState([]);
    const [selectedGoal, setSelectedGoal] = React.useState("");
    const [accountGoals, setAccountGoals] = React.useState([]);
    const [currentGoal, setCurrentGoal] = React.useState();

    const uploadFile = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
    }

    const inputFile = React.useRef(null);

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
                setSelectedGoal(Array.from(res.data).find(it => !!it === true).id)
            }).catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        if(selectedGoal !== ""){
            api.get(`/accounts/goals/${selectedGoal}`)
                .then(res => {
                    setCurrentGoal({ objetivo: res.data.objetivo, tasks: Array.from(res.data.tasks) })
                }).catch(err => {
                    console.log(err);
                })
        }
    }, [selectedGoal])


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
                                            <div style={{ display: "flex" }}>
                                                <Button onClick= {() => inputFile.current.click()} sx={{ height: "3vh", width: "300px" }}>
                                                    <input type='file' id='file' ref={inputFile} onChange={(e) => uploadFile(e)} style={{ display: 'none' }} />
                                                    Import TXT
                                                </Button>
                                            </div>
                                        </div>
                                    </Container>
                                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                                        <FormControl sx={{ width: "180px", marginTop: "15px" }}>
                                            <SelectBalancefy onChange={(e) => setTransactionType(e.target.value)} type="home" label="Tipo" value={transactionType} content="type" />
                                        </FormControl>
                                        <FormControl sx={{ width: "180px", marginTop: "15px" }}>
                                            <SelectBalancefy onChange={(e) => setTransactionCategory(e.target.value)} type="home" label="Categoria" value={transactionCategory} content="categoryTransaction" />
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ display: "flex", flexWrap: "wrap", minWidth: "521px", maxWidth: "540px" }}>
                                        {
                                            transactions !== undefined ?
                                                transactions.map((transaction) => (
                                                    <Transaction
                                                        key={transaction.id}
                                                        category={transaction.categoria}
                                                        type={transaction.tipo === "Entrada" ? "in" : "out"}
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
                                    <GoalsBalancefy data={accountGoals} value={selectedGoal} onChange={(event) => setSelectedGoal(event.target.value)} />
                                    {
                                        currentGoal !== undefined ? <ObjFinal
                                            title={currentGoal.objetivo.categoria}
                                            desc={currentGoal.objetivo.descricao}
                                            xp={currentGoal.objetivo.pontuacao + "XP"}
                                            metas={`${Array.from(currentGoal.tasks).filter(it => it.done === 1).length}/${currentGoal.tasks.length}`}
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
                                    <Container background="#4B4B4B" height="60vh" width="380px" borderRadius="10px">
                                        <TitleWithBorder>Dicas Para Você</TitleWithBorder>
                                        {
                                            dicas.map((dica) => {
                                                return (
                                                    <Dica key={dica.id} title={dica.titulo}>{dica.descricao}</Dica>
                                                )
                                            })
                                        }
                                    </Container>
                                </Grid>
                                <Grid item>
                                    <Ranking />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </MainContainer>
        </>
    );
}
