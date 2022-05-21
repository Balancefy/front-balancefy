import Container from "../Container";
import StepVerde from "../../img/step-1.png";
import StepVerdeAgua from "../../img/step-2.png";
import StepBranco from "../../img/step-3.png";


export default function Step(props) {
  return (
    <>
      <div
        style={{
          height: "100px",
          width: "400px",
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
        }}
      >
        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", zIndex: 2 }}>
          <div style={{ position: "relative", width: "fit-content", height: "fit-content" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "20px", color: "#2B2C28", fontWeight: "bold" }}>Passo 1</div>
            <img height={65} width={160} src={StepVerde} />
          </div>
        </div>

        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "130px", zIndex: 1 }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "20px", color: "#2B2C28", fontWeight: "bold" }}>Passo 2</div>
            <img height={65} width={160} src={StepVerdeAgua} />
          </div>
        </div>

        <div style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: "260px", zIndex: 0 }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "20px", color: "#2B2C28", fontWeight: "bold" }}>Passo 3</div>
            <img height={65} width={160} src={StepBranco} />
          </div>
        </div>

      </div>
    </>
  );
}
