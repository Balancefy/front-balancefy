
import SetaCima from "../../img/seta-cima.svg";
import SetaBaixo from "../../img/seta-baixo.svg";

export default function transactionModel(props) {
    let modelProperties = {
        src: props.out ? SetaBaixo : SetaCima,
        label: props.out ? "Saída" : "Entrada",
        color: props.out ? "#F45959" : "#7DE2D1"
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "200px",
                }}
            >
                <img style={{ marginRight: "10px" }} alt="setaBaixo" width="30px" src={modelProperties.src} />
                <div style={{ display: "flex", flexDirection: 'column', justifyContent: "flex-end" }}>
                    <h4 style={{ fontWeight: 400, margin: 0 }}>{modelProperties.label}</h4>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <div style={{ marginRight: "5px" }}>R$</div>
                        <p style={{ fontWeight: 400, color: modelProperties.color, margin: 0 }}>{props.value}</p>
                    </div>
                </div>
            </div>
        </>
    )
}