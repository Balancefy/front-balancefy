import { Button } from "@mui/material";
import ButtonBalancefy from "../Button";
export default function ObjetivoAtualBox(props){
   
    return(
        <>
        
      <div style={{
        margin: "10px auto",
        background: "#4B4B4B",
        width: "712px",
        borderRadius: "10px",
        justifyContent: 'center',
        paddingLeft: "30px",
        paddingTop: "15px"
        }}>
            <div style={{marginTop:"30px", color:"FFFFFF"}}>Objetivo Atual</div>
            <div style={{fontSize:"24px", marginTop:"10px"}}><span style={{color:"#7DE2D1"}}>{props.titulo}</span></div>
            <div style={{fontSize:"18px", marginTop:"10px"}}><span style={{color:"FFFFFF"}}>{props.descricao}</span></div>
            <div style={{fontSize:"18px", marginTop:"10px"}}><span style={{color:"FFFFFF"}}>+{props.xp}xp</span></div>
            
            
            <div style={{width:"100%", display:"flex", justifyContent:"flex-end", flexDirection:"row"}}>
             <ButtonBalancefy style={{width: "120px", height: "5vh", margin: "0 0 0 auto"}} type="submit">Concluir</ButtonBalancefy>
            </div>
        </div>
      
      </>
    );
}