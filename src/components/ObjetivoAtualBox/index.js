import ButtonBalancefy from "../Button";
import TitleBalancefy from "../Title";
export default function ObjetivoAtualBox(props) {

  return (
    <>

      <div style={{
        height: "21vh",
        background: "#4B4B4B",
        borderRadius: "10px",
        justifyContent: 'center',
        paddingLeft: "30px",
        paddingTop: "15px"
      }}>
        <div style={{ margin: "10px 0px 10px 0px" }}>
          <TitleBalancefy variant="h2">Objetivo Atual</TitleBalancefy>
        </div>
        <div style={{ fontSize: "24px", marginTop: "10px" }}><span style={{ color: "#7DE2D1" }}>{props.titulo}</span></div>
        <div style={{ fontSize: "18px", marginTop: "10px" }}><span style={{ color: "FFFFFF" }}>{props.descricao}</span></div>
        <div style={{ fontSize: "18px", marginTop: "10px" }}><span style={{ color: "FFFFFF" }}>+{props.xp}xp</span></div>


        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end", flexDirection: "row", paddingRight: "50px", paddingBottom: "100px" }}>
          {props.hasTask && 
          <ButtonBalancefy onClick={props.onClick} style={{ width: "120px", height: "4vh", marginTop: "-20px", borderRadius: "10px" }} type="submit" >Concluir</ButtonBalancefy>

          }
        </div>
      </div>

    </>
  );
}