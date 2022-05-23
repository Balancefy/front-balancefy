import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import ProfileBalancefy from '../../components/Profile'
import React, { useEffect } from 'react'
import { default as TopicBalancefy } from '../../components/Topic/profileVariant'
import { AuthContext } from '../../contexts/auth'
import api from '../../service/api'
import Input from '../../components/Input'
import { Alert, Collapse, InputAdornment } from '@mui/material'
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { default as Button } from '../../components/Button'
import { borderRadius, width } from '@mui/system'
import CheckPassword from '../../components/CheckPassword'
import InputPass from '../../components/InputPass'

export default function Profile() {
    const { user } = React.useContext(AuthContext);
    const [topics, setTopics] = React.useState([]);
    const [profileUser, setProfileUser] = React.useState(user);
    const [editing, setEditing] = React.useState(false);
    const [editPassword, setEditPassword] = React.useState(false);


    const [novaSenha, setNovaSenha] = React.useState("");
    const [senhaAtual, setSenhaAtual] = React.useState("");
    const [confirmarSenha, setConfirmarSenha] = React.useState("");

    const [biggerThanSex, setBiggerThanSex] = React.useState(false);
    const [atLeastOneSpecialChar, setAtLeastOneSpecialChar] = React.useState(false);
    const [samePassword, setSamePassword] = React.useState(false);
    const [oneUpperCase, setOneUpperCase] = React.useState(false);

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        const profile_id = localStorage.getItem('profile_id')

        if (profile_id !== null) {
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
    }, []);

    const handleChangePasswordAPI = () => {
        api.put("users/senha", {
            senhaAtual,
            novaSenha
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            setOpen(true)
            setTimeout(() => setOpen(false), 1500)
            setNovaSenha('')
            setSenhaAtual('')
            setConfirmarSenha('')
            console.log(err)
        })
    };

    const handleChangeSenha = (event) => {
        setSenhaAtual(event.target.value);
    };

    const validPassword = () => {
        const hasUpperCase = /[A-Z]/.test(novaSenha);
        const hasSymbol = /[!@#%&*><?]/.test(novaSenha);

        return (novaSenha.length > 6) && hasUpperCase && hasSymbol && (novaSenha === confirmarSenha)
    };

    const verifyPassword = (value) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasSymbol = /[!@#%&*><?]/.test(value);

        setBiggerThanSex(value.length > 6)
        setOneUpperCase(hasUpperCase)
        setAtLeastOneSpecialChar(hasSymbol)
        setSamePassword(value === confirmarSenha)
    };

    const changeSenha = (event) => {
        setNovaSenha(event.target.value)
        verifyPassword(event.target.value)
    };

    const changeConfirmarSenha = (event) => {
        setConfirmarSenha(event.target.value)
        setSamePassword(event.target.value === novaSenha)
    };

    return (
        <>
            <MainContainer page={"profile"}>
                <Container height="95vh" width="90%" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <Collapse sx={{ position: "absolute", top: 20, left: 20, width: 500 }} in={open}>
                        <Alert variant="filled" severity="error">
                            Senha inválida
                        </Alert>
                    </Collapse>
                    <div style={{
                        height: "90%",
                        width: "90%",
                        margin: "auto",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column"
                    }}>
                        <ProfileBalancefy name={profileUser.usuario.nome} imagem={profileUser.usuario.avatar}
                            button={<Button onClick={() => {
                                setEditPassword(false)
                                setEditing(!editing)
                            }} width="150px" height="50px" style={{
                                fontWeight: "bold",
                            }}>{editing ? "Cancelar" : "Editar"}</Button>}>
                        </ProfileBalancefy>
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
                            <div style={{ width: "100%", height: "40vh", display: "flex" }}>
                                {/* <form
                                    style={{ width: "100%" }}
                                    onSubmit={(event) => {
                                        event.preventDefault();
                                    }}> */}
                                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                                    <div>
                                        <div style={{ justifyContent: "space-between", display: "flex" }}>
                                            <Input label="Nome" type="primary" width="547px" adornment={<InputAdornment position="end"> <PersonIcon /></InputAdornment>}></Input>
                                        </div>
                                        <div style={{ marginTop: "40px" }}>
                                            <Input label="Email" type="primary" width="100%" adornment={<InputAdornment position="end"><EmailIcon /></InputAdornment>}></Input>
                                        </div>
                                        <div style={{ display: "flex", marginTop: "40px", flexDirection: "column", width: "fit-content" }}>
                                            <div style={{ display: "flex" }}>
                                                <div style={{
                                                    display: "flex",
                                                    width: "418px",
                                                    height: "50px",
                                                    fontWeight: "bold",
                                                    borderRadius: "10px",
                                                    borderTopRightRadius: "0",
                                                    borderBottomRightRadius: "0",
                                                    backgroundColor: "#7de2d1",
                                                    alignItems: "center",
                                                    color: "black",
                                                    paddingLeft: "16px"
                                                }}>Alterar Senha</div>
                                                <Button onClick={() => {
                                                    setEditPassword(!editPassword)
                                                }} width="60px" height="50px" style={{
                                                    fontWeight: "bold",
                                                    borderRadius: "10px",
                                                    borderTopLeftRadius: "0",
                                                    borderBottomLeftRadius: "0",
                                                    marginLeft: "2px",
                                                    fontSize: "36px"
                                                }}><span>{`>`}</span></Button>
                                            </div>
                                            <div style={{ display: "flex", marginTop: "40px", justifyContent: "space-between", width: "100%" }}>
                                                <Button onClick={() => {
                                                    setEditing(!editing)
                                                    setEditPassword(false)

                                                }} width="220px" height="50px" style={{
                                                    fontWeight: "bold",
                                                    backgroundColor: "#4B4B4B",
                                                    borderRadius: "10px",
                                                    color: "white"
                                                }}>Voltar</Button>

                                                <Button width="220px" height="50px" style={{
                                                    fontWeight: "bold",
                                                    borderRadius: "10px",
                                                }}>Concluir</Button>
                                            </div>
                                        </div>
                                    </div>
                                    {editPassword &&
                                        <>
                                            <form onSubmit={(event) => {
                                                event.preventDefault()
                                                if (validPassword()) {
                                                    handleChangePasswordAPI()
                                                } else {
                                                    setOpen(true)
                                                    setTimeout(() => setOpen(false), 1500)
                                                    setNovaSenha('')
                                                    setSenhaAtual('')
                                                    setConfirmarSenha('')
                                                }
                                            }}>

                                                <div>
                                                    <div style={{ justifyContent: "space-between", display: "flex" }}>
                                                        <InputPass label="Senha Atual" type="primary" width="547px" password={senhaAtual} onChange={handleChangeSenha}></InputPass>
                                                    </div>
                                                    <div style={{ marginTop: "40px" }}>
                                                        <InputPass label="Nova Senha" type="primary" width="100%" password={novaSenha} onChange={changeSenha}></InputPass>
                                                    </div>
                                                    <div style={{ marginTop: "40px" }}>
                                                        <InputPass label="Confirmação Nova Senha" type="primary" width="100%" password={confirmarSenha} onChange={changeConfirmarSenha}></InputPass>
                                                    </div>
                                                    <div style={{ display: "flex", marginTop: "40px", flexDirection: "column", width: "fit-content" }}>
                                                        <div style={{ display: "flex" }}>
                                                            <Button style={{
                                                                display: "flex",
                                                                width: "418px",
                                                                height: "50px",
                                                                fontWeight: "bold",
                                                                borderRadius: "10px",
                                                                backgroundColor: "#7de2d1",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                color: "black",
                                                                paddingLeft: "16px"
                                                            }}>Alterar</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>

                                            <div>
                                                <div style={{ width: "375px", height: "387px", background: "#2B2C28", borderRadius: "10px", alignItems: "center" }}>
                                                    <div style={{ width: "80%", height: "90%", margin: "auto", paddingTop: "23px" }}>
                                                        <div style={{ fontSize: "24px", color: "#7DE2D1", fontWeight: "bold", textAlign: "left" }}>
                                                            Requisitos de uma senha segura:
                                                        </div>
                                                        <CheckPassword checked={biggerThanSex} text="Maior que 6 caracteres"></CheckPassword>
                                                        <CheckPassword checked={atLeastOneSpecialChar} text="Pelo menos um caractere especial"></CheckPassword>
                                                        <CheckPassword checked={samePassword} text="As senhas devem coincidir"></CheckPassword>
                                                        <CheckPassword checked={oneUpperCase} text="Uma letra maiúscula "></CheckPassword>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                                {/* </form> */}
                            </div>}
                    </div>
                </Container>
            </MainContainer >
        </>
    )
}