import Titulo from "../../components/Titulo";
import FaltaMeta from"../../components/FaltaMeta";
import DataEstimada from "../../components/DataEstimada";
import ObjetivoAtualBox from "../../components/ObjetivoAtualBox";

export default function Goals(){
    return(
        <>
       
         <FaltaMeta>
             2.000,00
             </FaltaMeta>
             <DataEstimada>23/04/2022</DataEstimada>
             <ObjetivoAtualBox titulo="Economizar" descricao="Reservar 20 reais por mês, durante 2 meses"
             xp="10">

             </ObjetivoAtualBox>



        </>
    )
    
}