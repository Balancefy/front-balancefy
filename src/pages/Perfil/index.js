import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import ProfileBalancefy from '../../components/Profile'
import React from 'react'
import { default as TopicBalancefy } from '../../components/Topic/profileVariant'
import { AuthContext } from '../../contexts/auth'
import avatar from "../../Images/user3.jpg"

export default function Profile(props) {
    const { user } = React.useContext(AuthContext);

    const topics = [
        {
            key: 1,
            title: "Economizar dinheiro",
            description: "Como vocës fazem para não gastar o dinheiro assim que ele cai na conta? Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.",
            avatar: avatar,
            name: user.fkUsuario.nome,
            comment: "11",
            like: "11",
            views: "11",
            date: "2d"
        },
        {
            key: 2,
            title: "Economizar dinheiro",
            description: "Como vocës fazem para não gastar o dinheiro assim que ele cai na conta? Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.",
            avatar: avatar,
            name: user.fkUsuario.nome,
            comment: "11",
            like: "11",
            views: "11",
            date: "2d"
        },
        {
            key: 3,
            title: "Economizar dinheiro",
            description: "Como vocës fazem para não gastar o dinheiro assim que ele cai na conta? Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.",
            avatar: avatar,
            name: user.fkUsuario.nome,
            comment: "11",
            like: "11",
            views: "11",
            date: "2d"
        }
    ]

    return (
        <>
            <MainContainer page={"profile"}>
                <Container height="95vh" width="90%" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <div style={{
                        height: "90%",
                        width: "90%",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <ProfileBalancefy name={user.fkUsuario.nome} imagem={avatar}></ProfileBalancefy>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "100px"
                        }}>
                            {topics.map((topic) => {
                               return (
                                 <TopicBalancefy 
                                    description={topic.description}
                                    title={topic.title}
                                    avatar={topic.avatar}
                                    name={topic.name}
                                    comment={topic.comment}
                                    like={topic.like}
                                    views={topic.views}
                                    date={topic.date}
                                 />
                               )
                            })
                            }

                        </div>

                    </div>
                </Container>
            </MainContainer>
        </>
    )
}