import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default function CheckPassword(props) {

  return (
    <>
      <div style={{ display: "flex", marginTop: "25px", alignItems: "center" }}>
        <CheckCircleOutlineIcon style={{ width: "40px", height: "40px", color: props.checked ? "#7DE2D1" : "#4B4B4B"}}></CheckCircleOutlineIcon>
        <span style={{ marginLeft: "5px", fontSize: "18px" }}>{props.text}</span>
      </div>
    </>
  );
}
