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

import api from "../../service/api";


export default function Goals() {

    const [modalState, setModalState] = useState(false);

    const [goalRoadmap, setGoalRoadmap] = useState();

    const [transactions, setTransactions] = useState();

    useEffect(() => {
        api
            .get(`/accounts/goals/${1}`)
            .then((res) => {
                setGoalRoadmap({ objetivo: res.data.objetivo, tasks: res.data.tasks })
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
    },
        [])

    const usersRank = [
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

    const gastos = [
        { id: 3, desc: "Comida", porcentagem: 17 },
        { id: 1, desc: "UBER", porcentagem: 55 },
        { id: 2, desc: "Roupa", porcentagem: 37 },
    ]

    const usersRoadMap = {
        objetivo: {
            id: 1, desc: "Viajar para a Australia", xp: 4000
        },
        tasks: [
            { id: 2, desc: "Economizar", xp: 400 },
            { id: 3, desc: "Economizar", xp: 400 },
            { id: 4, desc: "Comprar Passagem", xp: 400 },
            { id: 5, desc: "Economizar", xp: 400 },
            { id: 6, desc: "Reservar Estadia", xp: 400 },
            { id: 7, desc: "Economizar", xp: 400 },
            { id: 7, desc: "Economizar", xp: 400 },
            { id: 7, desc: "Economizar", xp: 400 },
            { id: 7, desc: "Economizar", xp: 400 },
            { id: 7, desc: "Economizar", xp: 400 },
            { id: 7, desc: "Economizar", xp: 400 }
        ]
    }


    return (
        <>
            <MainContainer page="Goals">
                <Grid container direction="row" justifyContent="space-evenly" width="100%" height="95vh" margin="auto">
                    <Grid item md={9}>
                        <Container height="100%" width="100%" borderRadius={10}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container justifyContent="space-between" alignItems="center" paddingLeft="40px" paddingRight="40px" paddingTop="25px" paddingBottom="25px" >
                                        <Grid item>
                                            <Titulo styles={{ color: "#7DE2D1", fontSize: 24, fontWeight: 600 }}>Viagem Internacional</Titulo>
                                        </Grid>
                                        <Grid item>
                                            <ButtonBalancefy onClick={() => { setModalState(true); }} radius="10px">Adicionar Movimentação</ButtonBalancefy>
                                        </Grid>
                                    </Grid>

                                    <Grid container justifyContent="space-around">
                                        <Grid item>
                                            <FaltaMeta>
                                                2.000,00
                                            </FaltaMeta>
                                        </Grid>
                                        <Grid item>
                                            <DataEstimada>23/04/2022</DataEstimada>
                                        </Grid>
                                        <Grid item>
                                            <ObjetivoAtualBox titulo="Economizar" descricao="Reservar 20 reais por mês, durante 2 meses" xp="10">
                                            </ObjetivoAtualBox>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container direction="row" paddingLeft="33px" paddingRight="33px" justifyContent="space-between" paddingTop="25px" alignItems={"center"}>
                                        <Grid Item>
                                            <Grid container direction="column" justifyContent="space-between" spacing={5}>
                                                <Grid item>
                                                    <Container height="192px" width="583px" backgroundColor="#4B4B4B">
                                                        <div style={{ padding: "27px 0px 0px 40px" }}>
                                                            <TitleBalancefy variant="h2">Progresso</TitleBalancefy>
                                                        </div>
                                                    </Container>
                                                </Grid>
                                                <Grid item>
                                                    <MaioresGastos data={gastos}></MaioresGastos>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid Item>
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
                                <Ranking data={usersRank}></Ranking>
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