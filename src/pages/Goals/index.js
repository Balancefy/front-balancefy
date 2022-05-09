import Titulo from "../../components/Titulo";
import ButtonBalancefy from "../../components/Button";
import FaltaMeta from "../../components/FaltaMeta";
import DataEstimada from "../../components/DataEstimada";
import ObjetivoAtualBox from "../../components/ObjetivoAtualBox";
import MainContainer from "../../components/MainContainer";
import Container from "../../components/Container";
import Roadmap from "../../components/Roadmap";
import Ranking from "../../components/Ranking";
import { Box, Grid } from "@mui/material";
import { height } from "@mui/system";

export default function Goals() {

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


    return (
        <>
            <MainContainer page="Goals">
                <Grid container direction="row" justifyContent="space-evenly" width="100%" height="95vh" margin="auto">
                    <Grid item md={9}>
                        <Container height="100%" width="100%" borderRadius={10}>
                            <Grid container justifyContent="space-between" alignItems="center" paddingLeft="40px" paddingRight="40px" paddingTop="25px" paddingBottom="25px">
                                <Grid item>
                                    <Titulo styles={{color:"#7DE2D1", fontSize:24, fontWeight:600}}>Viagem Internacional</Titulo>
                                </Grid>
                                <Grid item>
                                    <ButtonBalancefy>Adicionar Movimentação</ButtonBalancefy>
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
                        </Container>
                    </Grid>
                    <Grid item height="100%">
                        <Grid container direction="column" justifyContent="space-between" height="100%">
                            <Grid item>
                                <Roadmap data={[{ id: 1, desc: "teste", xp: 10 }]}></Roadmap>
                            </Grid>
                            <Grid item>
                                <Ranking data={users}></Ranking>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </MainContainer>
        </>
    )

}