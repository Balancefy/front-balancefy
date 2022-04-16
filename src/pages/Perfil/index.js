import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import { default as Avatar } from '../../components/Avatar'
import {default as Button} from '../../components/Button'

export default function Profile(props) {
    return (
        <>
            <MainContainer page={"profile"}>
                <Container height="95vh" width="90%" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <div style={{
                        height: "90%",
                        width: "90%",
                        margin: "auto",
                    }}>
                        <div style={{
                            height: "448px",
                            width: "100%",
                            display: "flex",
                            alignItems: "flex-end",
                            position: "relative",
                        }}>
                            <div style={{
                                position: "absolute",
                                height: "334px",
                                width: "100%",
                                backgroundColor: "black",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: "10px",
                                backgroundImage: `url("https://wallpaperaccess.com/full/1860098.jpg")`,
                                backgroundPosition: "center",
                                backgroundSize: '100%',
                                top: 0,
                                left: 0
                            }}></div>
                            <div style={{
                                position: "relative",
                                height: "114px",
                                width: "100%",
                                marginLeft: "70px",
                                display: "flex",
                                flexDirection: "row",
                            }}>
                                <div style={{
                                    position:"absolute",
                                    top: "-150px"
                                }}>
                                    <Avatar width="250px" style={{
                                        border: "10px solid #131515"
                                    }}></Avatar>
                                </div>
                                <div style={{
                                    width: "100%",
                                    height: "100%",
                                    marginLeft:"270px",
                                    display:"flex",
                                    flexDirection:"row",
                                    justifyContent:"space-between",
                                    paddingTop:"30px"
                                }}>
                                    <div>
                                       AAAAAAAAAAAAA
                                    </div>
                                    <div>
                                        <Button width="150px" height="50px" style={{
                                            fontWeight: "bold",
                                        }}>Editar</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </MainContainer>
        </>
    )
}