import Container from '../../components/Container'
import MainContainer from '../../components/MainContainer'
import ProfileBalancefy from '../../components/Profile'
import React, { useEffect } from 'react'
import { default as TopicBalancefy } from '../../components/Topic/profileVariant'
import { AuthContext } from '../../contexts/auth'
import api from '../../service/api'
import Input from '../../components/Input'
import { Alert, Collapse, FormHelperText, InputAdornment } from '@mui/material'
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from '@mui/icons-material/Email';
import { default as Button } from '../../components/Button'
import CheckPassword from '../../components/CheckPassword'
import InputPass from '../../components/InputPass'
import { useLocation } from 'react-router-dom'
import CheckIcon from '@mui/icons-material/Check';
import { validEmail, validName } from '../../service/utils'
import { set } from 'date-fns'

export default function Profile() {
    const { user } = React.useContext(AuthContext);
    const location = useLocation();
    const [profileId, setProfileId] = React.useState();
    const [topics, setTopics] = React.useState([]);
    const [profileUser, setProfileUser] = React.useState(location.state !== null ? location.state : user);
    const [editing, setEditing] = React.useState(false);
    const [editPassword, setEditPassword] = React.useState(false);
    const [buttonEdit, setButtonEdit] = React.useState("block");
    const [novaSenha, setNovaSenha] = React.useState("");
    const [senhaAtual, setSenhaAtual] = React.useState("");
    const [confirmarSenha, setConfirmarSenha] = React.useState("");
    const [editUser, setEditUser] = React.useState({
        nome: "",
        email: ""
    })

    const [validNameIpt, setValidNameIpt] = React.useState(false);
    const [validEmailIpt, setValidEmailIpt] = React.useState(false);

    const [newUser, setNewUser] = React.useState(user)

    const [biggerThanSex, setBiggerThanSex] = React.useState(false);
    const [atLeastOneSpecialChar, setAtLeastOneSpecialChar] = React.useState(false);
    const [samePassword, setSamePassword] = React.useState(false);
    const [oneUpperCase, setOneUpperCase] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [openSimpleEdit, setOpenSimpleEdit] = React.useState(false);

    useEffect(() => {
        api.get(`/forum/accounts/${profileUser.id}`)
            .then((res) => {
                setTopics(res.data.list)
            })
            .catch((err) => console.log(err))
    }, [profileUser, biggerThanSex]);

    const handleChangePasswordAPI = () => {
        api.put("users/senha", {
            senhaAtual,
            novaSenha
        }).then((res) => {
            setEditing(!editing)
            setEditPassword(false)
            console.log(res)
        }).catch((err) => {
        setOpen(true)
        setTimeout(() => setOpen(false), 1500)
        cleanupPasswordValidation()
        console.log(err)
        })
    };
    
    const cleanupPasswordValidation = () => {
        setNovaSenha('')
        setSenhaAtual('')
        setConfirmarSenha('')
        setBiggerThanSex(false)
        setAtLeastOneSpecialChar(false)
        setSamePassword(false)
        setOneUpperCase(false)
    }

    const handleSimpleEdit = () => {
        if (validEmailIpt && validNameIpt) {
            api.put("users", editUser).then((res) => {
                localStorage.setItem("@balancefy:user", JSON.stringify({
                    ...newUser,
                    usuario: {
                        ...newUser.usuario,
                        nome: editUser.nome
                    }
                }))

                window.location.reload()
            }).catch((err) => {
                console.log(err)
            })
        } else {
            setOpenSimpleEdit(true)
            setTimeout(() => setOpenSimpleEdit(false), 1500)
            setEditUser({
                nome: "",
                email: ""
            })
            setValidEmailIpt(false)
            setValidNameIpt(false)
        }

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

    const handleChangeNome = (event) => {
        setValidNameIpt(validName(event.target.value))

        setEditUser({
            ...editUser,
            nome: event.target.value
        })
    }

    const handleChangeEmail = (event) => {
        setValidEmailIpt(validEmail(event.target.value))

        setEditUser({
            ...editUser,
            email: event.target.value
        })
    }

    return (
        <>
            <MainContainer page={"profile"}>
                <Container height="95vh" width="90%" style={{ margin: "auto", display: "flex", justifyContent: "center" }}>
                    <Collapse sx={{ position: "absolute", top: 20, left: 20, width: 500 }} in={open}>
                        <Alert variant="filled" severity="error">
                            Senha inválida
                        </Alert>
                    </Collapse>
                    <Collapse sx={{ position: "absolute", top: 20, left: 20, width: 500 }} in={openSimpleEdit}>
                        <Alert variant="filled" severity="error">
                            Email ou Nome Inválido!
                        </Alert>
                    </Collapse>
                    <div style={{
                        height: "90%",
                        width: "90%",
                        margin: "auto",
                        display: "flex",
                        flexDirection: "column"
                    }}>
                        <ProfileBalancefy name={profileUser.usuario.nome} editing={editing} imagem={profileUser.usuario.avatar}
                            button={profileUser === user && <Button
                                onClick={() => {
                                    setEditPassword(false)
                                    setEditing(!editing)
                                }} width="150px" height="50px" style={{
                                    fontWeight: "bold",
                                    display: buttonEdit
                                }}>{editing ? "Cancelar" : "Editar"}</Button>}>
                        </ProfileBalancefy>
                        {!editing &&
                            <>
                                <h2 style={{
                                    fontWeight: 600,
                                    color: "#7DE2D1",
                                    marginTop: "5vh",
                                    fontSize: "28px"
                                }}>{profileUser === user ? "Seus Tópicos" : "Tópicos de " + profileUser.usuario.nome}</h2>
                                <div style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "3vh"
                                }}>
                                    {
                                        topics !== undefined ?
                                            topics.map((post) => {
                                                return (
                                                    <div key={post.topico.id} style={{ marginRight: "5%" }}>
                                                        <TopicBalancefy
                                                            id={post.topico.id}
                                                            title={post.topico.titulo}
                                                            description={post.topico.descricao}
                                                            comment={post.commentSize}
                                                            like={post.topico.likes}
                                                            date={post.topico.createdAt}
                                                            liked={post.liked}
                                                            style="forum"
                                                        />
                                                    </div>
                                                )
                                            })
                                            : <></>
                                    }
                                </div>
                            </>
                        }
                        {editing &&
                            <div style={{ width: "100%", height: "40vh", display: "flex", }}>
                                <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
                                    <div>
                                        <form
                                            style={{ width: "100%" }}
                                            onSubmit={(event) => {
                                                event.preventDefault();
                                                handleSimpleEdit()
                                            }}
                                        >
                                            <div style={{ justifyContent: "space-between", display: "flex", flexDirection: "column" }}>
                                                <Input label="Nome" value={editUser.nome} onChange={handleChangeNome} type="primary" width="547px" adornment={<InputAdornment position="end"> <PersonIcon /></InputAdornment>}></Input>
                                                <FormHelperText sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <CheckIcon sx={{ color: validNameIpt ? "#7DE2D1" : "#F45959" }} />
                                                    <span style={{ marginLeft: '5px' }}>Novo nome precisa ter pelo menos 3 Letras</span>
                                                </FormHelperText>
                                            </div>
                                            {
                                                user.usuario.tipo === "DEFAULT" ?
                                                    <>
                                                        <div style={{ marginTop: "40px" }}>
                                                            <Input label="Email" value={editUser.email} onChange={handleChangeEmail} type="primary" width="100%" adornment={<InputAdornment position="end"><EmailIcon /></InputAdornment>}></Input>
                                                            <FormHelperText sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <CheckIcon sx={{ color: validEmailIpt ? "#7DE2D1" : "#F45959" }} />
                                                                <span style={{ marginLeft: '5px' }}>Domínio de e-mail válido</span>
                                                            </FormHelperText>
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
                                                                <Button type="button" onClick={() => {
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
                                                        </div>
                                                    </>
                                                    :
                                                    <></>
                                            }

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

                                        </form>
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
                            </div>}
                    </div>
                </Container>
            </MainContainer >
        </>
    )
}