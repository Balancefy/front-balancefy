import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import ProfileBalancefy from '../../components/Profile'
import React, { useEffect } from 'react'
import { default as TopicBalancefy } from '../../components/Topic/profileVariant'
import { AuthContext } from '../../contexts/auth'
import api from '../../service/api'

export default function Profile() {
    const { user } = React.useContext(AuthContext);
    const [topics, setTopics] = React.useState([]);
    const [profileUser, setProfileUser] = React.useState(user);
    const [editing, setEditing] = React.useState(true);

    useEffect(() => {
        const profile_id = localStorage.getItem('profile_id')

        if(profile_id !== null) {
            api.get(`/accounts/${profile_id}`)
                .then((res) => {
                    setProfileUser(res.data)
                    localStorage.removeItem('profile_id')
                })
                .catch((err) => console.log(err))
        }

        // api.get(`/${profileUser.id_usuario}`)
        //     .then((res) => setTopics(res.data))
        //     .catch((err) => console.log(err))
    }, [])


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
                        <ProfileBalancefy name={profileUser.fkUsuario.nome} imagem={profileUser.fkUsuario.avatar}></ProfileBalancefy>
                        {!editing &&
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

                            </div>}
                        {editing &&
                            <div style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: "100px"
                            }}>
                                
                
                        </div>}
                    </div>
                </Container>
            </MainContainer>
        </>
    )
}