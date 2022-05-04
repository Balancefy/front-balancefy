
import { default as Avatar } from '../Avatar'
import { default as Button } from '../Button'

const apiUrl = process.env.REACT_APP_API_URL

function ProfileBalancefy(props) {
    return (
        <>
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
                    backgroundImage: `url("https://wallpaper.dog/large/20459074.jpg")`,
                    backgroundPosition: "center",
                    backgroundSize: 'cover',
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
                        position: "absolute",
                        top: "-150px"
                    }}>
                        <Avatar width="250px" imageAvatar={apiUrl + props.imagem} style={{
                            border: "10px solid #131515"
                        }}></Avatar>
                    </div>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        marginLeft: "270px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: "10px"
                    }}>
                        <div>
                            <div style={{
                                fontSize:"24px",
                                fontWeight: "bold"
                            }}>
                                {props.name}
                            </div>
                            <div style={{
                                fontSize: "20px",
                                color: "#7DE2D1"
                            }}>
                                Mão de Vaca
                            </div>
                        </div>
                        <div>
                            <Button width="150px" height="50px" style={{
                                fontWeight: "bold",
                            }}>Editar</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProfileBalancefy;