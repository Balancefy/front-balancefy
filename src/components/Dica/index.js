import PushPinIcon from '@mui/icons-material/PushPin';

function Dica(props) {
  return (
    <>
      <div style={{
        margin: "2vh auto",
        background: "#4B4B4B",
        minHeight: "158px",
        width: "330px",
        borderRadius: "10px",
        justifyContent: 'center',
        paddingLeft: "30px",
        paddingTop: "15px",
        paddingBottom: "15px"
      }}>
        <div>
          <div style={{
            color: "#7DE2D1",
            fontSize: 20,
            fontWeight: "SemiBold",
            display: "flex",
            alignItems: "center"
          }}>
            <PushPinIcon style={{ marginRight: "5px" }}></PushPinIcon>
            {props.title}
          </div>
          <div style={{
            maxWidth: "90%",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "SemiBold",
          }}>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dica;