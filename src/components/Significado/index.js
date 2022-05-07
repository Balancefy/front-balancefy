import Container from "../Container";

function SignificadoPerfil(props) {
    return (
        <>
            <div style={{
                ...props.style

            }}>
                <div style={{
                    height: "0",
                    width: "0",
                    borderBottom: "50px solid transparent",
                    borderRight: "70px solid #4B4B4B",
                    float: "left"
                }}>

                </div>
                <Container height="220px" width="18%" backgroundColor="#4B4B4B" style={{
                    position: "absolute",
                    marginLeft: "55px"
                }}>
                    <div style={{
                        height: "220px",
                        width: "90%",
                        margin: "auto",
                    }}>
                        <div style={{
                            width: "100%",
                            height: "100px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <p style={{
                                fontSize: "14px",
                                color: "white",
                                textAlign: "justify"
                            }}>
                                Você é muito bom nas tasks que envolvem economizar dinheiro, parabéns!
                            </p>
                        </div>

                        <div style={{
                            width: "100%",
                            height: "20px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <p style={{
                                fontSize: "14px",
                                color: "white"
                            }}>
                                Montante economizado em 3 meses:
                            </p>
                        </div>

                        <div style={{
                            width: "100%",
                            height: "20px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <p style={{
                                fontSize: "14px",
                                color: "white"
                            }}>
                                R$ <span style={{
                                    color: "#7DE2D1"
                                }}>1340,00</span>
                            </p>
                        </div>

                        <div style={{
                            width: "100%",
                            height: "80px",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <img style={{
                                height: "50px"

                            }} src="https://aaainovacao.com.br/wp-content/uploads/2021/01/cropped-Vector-Smart-Object-3.png"></img>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
}

export default SignificadoPerfil;