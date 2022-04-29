import Container from "../../components/Container";
import CalendarIcon from "../../img/calendar_1_1.svg";
export default function DataEstimada(props){
   
    return(
        <>
        
      <div style={{
        margin: "10px auto",
        background: "#4B4B4B",
        height: "203px",
        width: "206px",
        borderRadius: "10px",
        justifyContent: 'center',
        paddingLeft: "30px",
        paddingTop: "15px"
        }}>
            <img style={{}} alt="saveMoney" width="50px" src={CalendarIcon} />
            <div style={{marginTop:"30px"}}>Data Estimada</div>
            <div style={{fontSize:"24px", marginTop:"10px"}}><span style={{color:"#7DE2D1"}}>{props.children}</span></div>
        </div>
      
      </>
    );
    
}