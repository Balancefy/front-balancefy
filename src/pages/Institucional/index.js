import {
    styles, itemForm, itemLogo, itemArco, itemArco2, itemPlanejamento, itemAcompanhamento, itemObjetivos, itemImageDescricao,
    itemFacebook, itemInstagram, itemLinkedin
} from './styles.js';
import ButtonBalancefy from '../../components/Button/index.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TitleBalancefy from '../../components/Title';
import { Link } from 'react-router-dom';

function Institucional() {
    return (
        <>
            <div style={styles.container}>
                <div style={styles.textDiv}>
                    <img style={{ height: '40px', margin: "2rem 0rem 0rem 0rem" }} src={itemLogo.img} alt={itemLogo.title} />
                    <img style={{
                        height: '1020px',
                        position: "absolute",
                        left: "565px",
                    }}
                        src={itemForm.img} alt={itemForm.title} />

                    <a style={{
                        position: "absolute",
                        margin: "2.4rem 0rem 0rem 0rem",
                        left: "840px",
                        fontSize: "18px",
                        fontWeight: "500"

                    }}>Home</a>

                    <a style={{
                        position: "absolute",
                        margin: "2.4rem 0rem 0rem 0rem",
                        left: "910px",
                        fontSize: "18px",
                        fontWeight: "500"

                    }}>Produto</a>

                    <div style={styles.sloganDiv}>
                        <TitleBalancefy variant="h1">UM JEITO FÁCIL DE ALCANÇAR SEUS</TitleBalancefy>
                        <TitleBalancefy variant="h1" color="#7DE2D1">OBJETIVOS</TitleBalancefy>
                    </div>

                    <div style={styles.formsDiv}>
                        <img style={{
                            height: "650px"
                        }} src={itemArco.img}></img>



                        <img style={{
                            height: "480px",
                            position: "absolute",
                            right: "0px",
                            top: "400px"
                        }} src={itemArco2.img}></img>
                    </div>




                </div>

                <div style={styles.imageDiv}>
                    <Link to="/Cadastro" style={{ color: "#2B2C28" }}>
                        <button style={{
                            width: "125px",
                            height: "40px",
                            borderRadius: "7px",
                            border: "2px solid #2B2C28",
                            background: "transparent",
                            position: "absolute",
                            margin: "2rem 0rem 0rem 0rem",
                            left: "1600px",
                            cursor:"pointer"
                        }}>
                            Cadastrar
                        </button>
                    </Link>
                    <a style={{
                        position: "absolute",
                        margin: "2.4rem 0rem 0rem 0rem",
                        left: "1760px",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#2B2C28"

                    }}>
                        <Link to="/Login" style={{ color: "#2B2C28" }}>
                            <span style={{
                                position: "absolute"
                            }}>Acessar</span>

                            <ArrowForwardIcon sx={{ color: "#2B2C28" }} style={{
                                position: "absolute",
                                left: "75px",
                                top: "2px"
                            }}></ArrowForwardIcon>
                        </Link>
                    </a>
                </div>

            </div>

            <div style={styles.valores}>
                <div style={styles.container2}>

                    <div style={styles.titleValores}>
                        <TitleBalancefy variant="h3"
                            style={{
                                color: "#7DE2D1"
                            }}>
                            PLANEJAMENO FINANCEIRO QUE FUNCIONA
                        </TitleBalancefy>
                    </div>

                    <div style={styles.imagesValores}>
                        <img style={{
                            height: "300px",
                            marginRight: "200px"
                        }} src={itemPlanejamento.img}></img>

                        <img style={{
                            height: "300px",
                            marginLeft: "100px"
                        }} src={itemAcompanhamento.img}></img>

                        <img style={{
                            height: "300px",
                            marginLeft: "250px"
                        }} src={itemObjetivos.img}></img>
                    </div>
                </div>
            </div>

            <div style={styles.descricao}>
                <div style={styles.container3}>

                    <div style={styles.titleDescricao}>
                        <TitleBalancefy variant="h3" style={{
                            color: "#7DE2D1"
                        }}>
                            PLATAFORMA MODERNA E INTUITIVA
                        </TitleBalancefy>
                    </div>

                    <div style={styles.imageDescricao}>
                        <img style={{ height: '850px' }} src={itemImageDescricao.img} alt={itemImageDescricao.title} />
                    </div>

                    <div style={styles.textDescricao}>
                        <div style={styles.boxTextDescricao}>
                            <p style={{
                                width: "480px",
                                fontSize: "20px",
                                textAlign: "center"
                            }}> Uma plataforma moderna e intuitiva, para cuidar da sua vida financeira de maneira divertida e eficiente.</p>

                            <Link to="/Cadastro" style={{ color: "#2B2C28" }}>
                                <ButtonBalancefy style={{
                                    width: "340px",
                                    height: "40px",
                                    borderRadius: "10px"
                                }}>
                                    Conheça
                                </ButtonBalancefy>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            <div style={styles.footer}>
                <div style={styles.containerFooter}>

                    <div style={styles.boxFooter}>
                        <div style={styles.titleBoxes}>
                            Sobre nós
                        </div>

                        <div style={styles.textSobreNos}>
                            <p style={styles.paragrafosFooter}> Balancefy é uma plataforma de planejamento financeiro, 
                            que permite que o usuário cuide de toda sua vida financeira e de seus objetivos e metas
                             de forma intuitiva e moderna.  </p>
                        </div>

                    </div>

                    <div style={styles.boxFooter}>
                        <div style={styles.titleBoxes}>
                            Seções
                        </div>

                        <div style={styles.textSecoes}>
                            <p style={styles.paragrafosFooter}>Home</p>
                            <p style={styles.paragrafosFooter}>Produtos</p>
                            <p style={styles.paragrafosFooter}>Plataforma</p>
                        </div>

                    </div>

                    <div style={styles.boxFooter}>
                        <div style={styles.titleBoxes}>
                            Links úteis
                        </div>

                        <div style={styles.textSecoes}>
                            <p style={styles.paragrafosFooter}>Cadastro</p>
                            <p style={styles.paragrafosFooter}>Login</p>
                        </div>
                    </div>

                    <div style={styles.boxFooter}>
                        <div style={styles.titleBoxes}>
                            Redes sociais
                        </div>

                        <div style={styles.iconsRedes}>

                            <a href='https://www.facebook.com/' target="_blank">
                                <img style={{ height: '40px', marginRight: "40px" }} src={itemFacebook.img} />
                            </a>

                            <a href='https://www.instagram.com/balancefy_/' target="_blank">
                                <img style={{ height: '40px', marginRight: "40px" }} src={itemInstagram.img} />
                            </a>

                            <a href='https://www.linkedin.com/in/mateus-ferreira-andrade-1735231b0/' target="_blank">
                                <img style={{ height: '40px', marginRight: "40px" }} src={itemLinkedin.img} />
                            </a>

                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Institucional