import Container from "../Container";
import TitleBalancefy from "../Title";
import AvatarBalancefy from "../Avatar";
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function TopicBalancefy(props) {

    return (
        <>
            <Container backgroundColor="#131515" height="222px" width="36%" borderRadius="10px">
                <div style={{
                    width: "90%",
                    height: "100%",
                    margin: "auto",
                    paddingTop: "20px"
                }}>
                    <div style={{
                    }}>
                        <TitleBalancefy variant="h2" color="#7DE2D1">Economizar dinheiro</TitleBalancefy>
                    </div>

                    <div style={{
                        paddingTop: "15px"
                    }}>
                        <TitleBalancefy variant="body1" color="#FFF">Como vocës fazem para não gastar o dinheiro assim que ele cai na conta?
                            Preciso economizar dinheiro, mas tenho muita dificuldade em lidar com gastos.</TitleBalancefy>
                    </div>

                    <div style={{
                        paddingTop: "15px",
                        width: "10%",
                        float: "left"
                    }}>
                        <AvatarBalancefy width="50px" imageAvatar="https://img.freepik.com/fotos-gratis/menina-com-fundo-amarelo-isolado-comprando-com-o-celular-com-um-cartao-de-credito-enquanto-pensa_1368-220330.jpg"></AvatarBalancefy>
                    </div>

                    <div style={{
                        float: "left",
                        height: "75px",
                        width: "30%",
                        display: "flex",
                        alignItems: "center"

                    }}>
                        <TitleBalancefy variant="subtitle1">
                            Beatriz Santos
                        </TitleBalancefy>
                    </div>

                    <div style={{
                        float: "left",
                        width: "60%",
                        height: "75px",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        paddingLeft: "70px"

                    }}>
                        
                            <CommentIcon></CommentIcon> 11
                            <ThumbUpIcon></ThumbUpIcon> 11
                            <RemoveRedEyeIcon></RemoveRedEyeIcon> 11
                            <AccessTimeIcon></AccessTimeIcon> 2d
                    </div>
                </div>

            </Container>
        </>
    )
}

export default TopicBalancefy;