import Titulo from "../../components/Titulo";
import ButtonBalancefy from "../../components/Button";
import FaltaMeta from "../../components/FaltaMeta";
import DataEstimada from "../../components/DataEstimada";
import ObjetivoAtualBox from "../../components/ObjetivoAtualBox";
import MainContainer from "../../components/MainContainer";
import Container from "../../components/Container";
import Roadmap from "../../components/Roadmap";
import Ranking from "../../components/Ranking";
import MaioresGastos from "../../components/MaioresGastos";
import { Grid } from "@mui/material";
import TitleBalancefy from "../../components/Title";
import TransactionGoal from "../../components/TransactionGoalList";
import ModalMovimentacao from "../../components/ModalMovimentacao";
import { useEffect, useState } from "react";
import { formatDate } from "../../service/utils";
import api from "../../service/api";


export default function Goals() {

    const [modalState, setModalState] = useState(false);

    const [goalRoadmap, setGoalRoadmap] = useState();

    const [transactions, setTransactions] = useState();
    
    const [estimatedTime, setEstimatedTime] = useState('Loading...');

    const [currentTask, setCurrentTask] = useState();

    const [expenses, setExpenses] = useState();

    const [reachout, setReachout] = useState("0,00")

    const goalId = 1;
    useEffect(() => {
        api
            .get(`/accounts/goals/${goalId}`)
            .then((res) => {
                setGoalRoadmap({ objetivo: res.data.objetivo, tasks: Array.from(res.data.tasks).reverse() })
                setCurrentTask(Array.from(res.data.tasks).find(it => it.done === 0));

                setEstimatedTime(formatDate(res.data.objetivo.tempoEstimado.replace('-', '/')));
            })
            .catch((err) => {
                console.log(err)
            })

        api
            .get(`/transactions/goal/${1}`)
            .then((res) => {
                setTransactions(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

        api
            .get(`transactions/goal/${goalId}/expenses`)
            .then(res => {
                setExpenses(res.data.list);
            }).catch(err => {
                console.log(err);
            })

        api
            .get(`accounts/goals/${goalId}/reachout`)
            .then(res => {
                setReachout(res.data.value.toFixed(2).replace(".",","));
            })
            
        
    },
        [])



    return (
        <>
            <MainContainer page="Goals">
                <Grid container direction="row" justifyContent="space-evenly" width="100%" height="95vh" margin="auto">
                    <Grid item md={9}>
                        <Container height="100%" width="100%" borderRadius={10}>
                            <Grid container direction="column" marginTop={0} rowSpacing={5} paddingLeft={8} paddingRight={8}>
                                <Grid item>
                                    <Grid container justifyContent="space-between" >
                                        <Grid item>
                                            <Titulo styles={{ color: "#7DE2D1", fontSize: 24, fontWeight: 600 }}>Viagem Internacional</Titulo>
                                        </Grid>
                                        <Grid item>
                                            <ButtonBalancefy onClick={() => { setModalState(true); }} radius="10px">Adicionar Movimentação</ButtonBalancefy>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={6}>
                                                <Grid item md={2.4}>
                                                    <FaltaMeta>
                                                        {reachout}
                                                    </FaltaMeta>
                                                </Grid>
                                                <Grid item md={2.4}>
                                                    <DataEstimada>{estimatedTime}</DataEstimada>
                                                </Grid>
                                                <Grid item md={7.2}>
                                                    <ObjetivoAtualBox titulo={currentTask !== undefined ? currentTask.descricao : "Loading..."} descricao={`R$ ${currentTask !== undefined && currentTask.valor !== null ? currentTask.valor : "0,00" }`} xp={currentTask ? currentTask.pontuacao : "0"}>
                                                    </ObjetivoAtualBox>
                                                </Grid>
                                        </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={6}>
                                        <Grid item md={5.8}>
                                            <Grid container direction="column" rowSpacing={5}>
                                                <Grid item md={4}>
                                                    <Container height="192px" backgroundColor="#4B4B4B">
                                                        <div style={{ padding: "27px 0px 0px 40px" }}>
                                                            <TitleBalancefy variant="h2">Progresso</TitleBalancefy>
                                                        </div>
                                                    </Container>
                                                </Grid>
                                                <Grid item md={4}>
                                                    <MaioresGastos data={expenses}></MaioresGastos>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={6.2}>
                                            <TransactionGoal data={transactions}></TransactionGoal>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    </Grid>
                    <Grid item height="100%">
                        <Grid container direction="column" justifyContent="space-between" height="100%">
                            <Grid item>
                                <Roadmap data={goalRoadmap}></Roadmap>
                            </Grid>
                            <Grid item>
                                <Ranking></Ranking>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <ModalMovimentacao
                    open={modalState}
                    onClick={() => {
                        setModalState(false);
                    }}
                />

            </MainContainer>
        </>
    )
}