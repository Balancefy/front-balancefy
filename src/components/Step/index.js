import Container from "../Container";
import StepVerde from "../../img/step-verde-escuro.svg";
import StepVerdeAgua from "../../img/step-verde-agua.svg";
import { red } from "@mui/material/colors";

export default function Step(props) {
  return (
    <>
      <div
        style={{
          height: "100px",
          width: "300px",
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          background: "red", 
          marginTop: "10%",
        }}
      >
        <div style={{ position: "absolute" }}>
          <img src={StepVerde} />
        </div>
        <div style={{ position: "absolute", left: "30" }}>
          <img src={StepVerdeAgua} />
        </div>
      </div>
    </>
  );
}
