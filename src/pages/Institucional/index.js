import { styles, itemForm, itemLogo, itemArco, itemArco2 } from './styles.js';
import ButtonBalancefy from '../../components/Button/index.js';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TitleBalancefy from '../../components/Title'

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
                    <button style={{
                        width: "125px",
                        height: "40px",
                        borderRadius: "7px",
                        border: "2px solid #2B2C28",
                        background: "transparent",
                        position: "absolute",
                        margin: "2rem 0rem 0rem 0rem",
                        left: "1600px"
                    }}>
                        Cadastrar
                    </button>

                    <a style={{
                        position: "absolute",
                        margin: "2.4rem 0rem 0rem 0rem",
                        left: "1760px",
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "#2B2C28"

                    }}>
                        <span style={{
                            position: "absolute"
                        }}>Acessar</span>

                        <ArrowForwardIcon sx={{ color: "#2B2C28" }} style={{
                            position: "absolute",
                            left: "75px",
                            top: "2px"

                        }}></ArrowForwardIcon>
                    </a>
                </div>
            </div>


        </>
    )
}

export default Institucional