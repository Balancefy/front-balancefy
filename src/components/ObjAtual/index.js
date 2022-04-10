import Container from "../Container";
import TitleBalancefy from "../Title";
import ButtonBalancefy from "../Button";
import { flexbox, height } from "@mui/system";

function ObjAtual(props) {

    return (
        <>
            <Container height="206px" width="37%" borderRadius="10px" backgroundColor="#4B4B4B">

                <div style={{
                    width: "90%",
                    border: "1px solid transparent",
                    margin: "auto",
                    height: "100%"
                }}>
                    <div style={{
                        marginTop: "22px"
                    }}>
                        <TitleBalancefy variant="h2" color="#FFF">
                            Objetivo Atual
                        </TitleBalancefy>
                    </div>

                    <div style={{
                        marginTop: "12px"
                    }}>
                        <TitleBalancefy variant="h4" color="#7DE2D1">
                            Economizar
                        </TitleBalancefy>
                    </div>

                    <div style={{
                        marginTop: "22px",
                        width: "90%"
                    }}>
                        <TitleBalancefy variant="h4" color="#FFF">
                            Reservar R$ 20,00 por mês, durante 2 meses
                        </TitleBalancefy>
                    </div>

                    <div style={{
                        marginTop: "25px",
                        width: "40%",
                        float: "left"
                    }}>
                        <TitleBalancefy variant="h4" color="#FFF">
                            +400xp
                        </TitleBalancefy>
                    </div>

                    <div style={{
                        marginTop: "12px",
                        width: "40%",
                        float: "right",
                        textAlign: "right"
                    }}>
                        <ButtonBalancefy width="50%" height="40px" radius="10px">
                            Concluir
                        </ButtonBalancefy>
                    </div>





            </div>
        </Container>
        </>
    )
}

export default ObjAtual;