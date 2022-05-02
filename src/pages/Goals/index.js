import Titulo from "../../components/Titulo";
import FaltaMeta from "../../components/FaltaMeta";
import DataEstimada from "../../components/DataEstimada";
import ObjetivoAtualBox from "../../components/ObjetivoAtualBox";
import MainContainer from "../../components/MainContainer";
import Container from "../../components/Container";
import Roadmap from "../../components/Roadmap";
import Ranking from "../../components/Ranking";
import {Box} from "@mui/material";

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
                <Container margin="auto" height="95vh" width="60%" borderRadius={10} >

                    <FaltaMeta>
                        2.000,00
                    </FaltaMeta>
                    <DataEstimada>23/04/2022</DataEstimada>
                    <ObjetivoAtualBox titulo="Economizar" descricao="Reservar 20 reais por mês, durante 2 meses" xp="10">
                    </ObjetivoAtualBox>
                </Container>
                <div style={{display:"flex", flexWrap: "wrap", margin:"auto" }}>
                  <Roadmap data={[{id:1, desc: "teste", xp: 10}]}></Roadmap>
                  <Ranking data={users} marginTop="150px"></Ranking>
                </div>
            </MainContainer>
        </>
    )

}