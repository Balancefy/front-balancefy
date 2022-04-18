import ImageBg from '../../Images/ImagemFundo.png';
import Form from '../../Images/Vector.png';
import Logo from '../../Images/ICON.png';
import Arco from '../../Images/Arco1.png';
import Arco2 from '../../Images/Arco2.png';
import Planejamento from '../../Images/Planejamento.png';
import Acompanhamento from '../../Images/Acompanhamento.png';
import Objetivos from '../../Images/Objetivos.png';
import imageDescricao from '../../Images/imageDescricao.png';
import iconFacebook from '../../Images/facebook.png';
import iconInstagram from '../../Images/instagram.png';
import iconLinkedin from '../../Images/linkedin.png';



export const styles = {
    container: {
        width: "97.5%",
        background: "#2B2C28",
        float: "right",
    },

    textDiv: {
        width: "40%",
        height: "1000px",
        float: "left"
    },

    imageDiv: {
        width: "60%",
        height: "1000px",
        float: "right",
        backgroundImage: `url(${ImageBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },

    formsDiv: {
        width: "45%",
        float: "right",
        height: "750px",
        top: "120px",
        position: "absolute"
    },

    sloganDiv: {
        height: "200px",
        width: "35%",
        top: "390px",
        left: "130px",
        position: "absolute",
        zIndex: "1"
    },

    valores: {
        width: "100%",
        height: "500px",
        background: "#131515",
        position: "absolute",
        marginTop: "1000px"
    },

    container2: {
        width: "95%",
        margin: "auto",
        height: "500px",
        
    },

    titleValores: {
        marginTop: "65px",
        width: "100%",
        display: "flex",
        justifyContent: "center"
    },

    imagesValores: {
        marginTop: "50px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItens: "inline"
    },

    descricao: {
        width: "100%",
        height: "800px",
        position: "absolute",
        marginTop: "1500px"
    },

    container3: {
        width: "95%",
        margin: "auto",
        height: "100%",
    },

    titleDescricao: {
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    imageDescricao: {
        height: "720px",
        width: "65%",
        float: "left",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    textDescricao: {
        height: "650px",
        width: "35%",
        float: "right",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },

    boxTextDescricao: {
        width: "450px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },

    footer: {
        width: "100%",
        height: "300px",
        background: "#131515",
        position: "absolute",
        marginTop: "2335px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    containerFooter: {
        width: "95%",
        margin: "auto",
        height: "250px",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between"
    },

    boxFooter: {
        width: "25%",
        height: "100%",
    },

    titleBoxes: {
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "left",
        fontSize: "20px",
        textDecoration: "underline #7DE2D1 1px"
    },

    textSobreNos: {
        width: "80%",
        height: "180px",
        display: "flex",
        justifyContent: "left"
    },
    
    textSecoes: {
        width: "80%",
        height: "180px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "left",
    },

    paragrafosFooter: {
        color: "gray",
        fontSize: "14px"
    },

    iconsRedes: {
        width: "80%",
        height: "180px",
        display: "flex",
        flexWrap: "wrap",
        alignContent: "space-between"
    },
    
   

};

export const itemForm ={
    img: `${Form}`,
    title: "form"
}

export const itemLogo ={
    img: `${Logo}`,
    title: "logo"
}

export const itemArco ={
    img: `${Arco}`,
    title: "arco"
}

export const itemArco2 ={
    img: `${Arco2}`,
    title: "arco 2"
}

export const itemPlanejamento ={
    img: `${Planejamento}`,
    title: "planejamento"
}

export const itemAcompanhamento ={
    img: `${Acompanhamento}`,
    title: "planejamento"
}

export const itemObjetivos ={
    img: `${Objetivos}`,
    title: "planejamento"
}

export const itemImageDescricao ={
    img: `${imageDescricao}`,
    title: "Imagem da descrição"
}

export const itemFacebook ={
    img: `${iconFacebook}`,
    title: "Imagem da descrição"
}

export const itemInstagram ={
    img: `${iconInstagram}`,
    title: "Imagem da descrição"
}

export const itemLinkedin ={
    img: `${iconLinkedin}`,
    title: "Imagem da descrição"
}
