import theme from "../../theme";
import EditIcon from '@mui/icons-material/Edit';

export default function Transaction(props) {
    return (
        <>
            <div style={{
                width: "160px",
                height: "127px",
                backgroundColor: "#131515",
                borderRadius: 10,
                paddingTop: "5px",
                margin: "10px",
            }}>
                <div style={{
                    width: "90%",
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.9rem",
                    alignItems: "center",
                    fontWeight: 'bold',
                    margin: "0 auto"
                }}>
                    <div>#{props.category}</div>
                    <EditIcon style={{
                        cursor: "pointer"
                    }} fontSize="0.9rem"></EditIcon>
                </div>
                <div style={{
                    marginTop: "15px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                    marginLeft: "12.5px"
                }}>
                    {props.title}
                </div>
                <div style={{
                    width: "100%",
                    backgroundColor: "#2B2C28",
                    height: "5px"
                }}></div>
                <div style={{
                    paddingLeft: "10px",
                    marginTop:"10px",
                    display: "flex",
                    flexDirection: "row",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    alignItems:"center"
                }}>
                    <div style={{
                        marginRight:"5px"
                    }}>R$</div>
                    <div style={{
                        color: props.type === "out" ? "#F45959" : "#7DE2D1", 
                    }}>{props.children}</div>
                </div>
            </div>
        </>
    );
}