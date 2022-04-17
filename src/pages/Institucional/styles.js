import ImageBg from '../../Images/ImagemFundo.png';
import Form from '../../Images/Vector.png';
import Logo from '../../Images/ICON.png';
import Arco from '../../Images/Arco1.png';
import Arco2 from '../../Images/Arco2.png';
import Planejamento from '../../Images/Planejamento.png';
import Acompanhamento from '../../Images/Acompanhamento.png';
import Objetivos from '../../Images/Objetivos.png';


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
    }

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
