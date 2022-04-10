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
            <Container backgroundColor="#131515" height="222px" width={props.width} borderRadius="10px">
                <div style={{
                    width: "90%",
                    height: "100%",
                    margin: "auto",
                }}>
                    <div style={{
                    }}>
                        <TitleBalancefy variant="h2" color="#7DE2D1">{props.title}</TitleBalancefy>
                    </div>

                    <div style={{
                        paddingTop: "15px"
                    }}>
                        <TitleBalancefy variant="body1" color="#FFF">{props.description}</TitleBalancefy>
                    </div>

                    <div style={{
                        paddingTop: "15px",
                        width: "10%",
                        float: "left"
                    }}>
                        <AvatarBalancefy width="50px" imageAvatar={props.avatar}></AvatarBalancefy>
                    </div>

                    <div style={{
                        float: "left",
                        height: "75px",
                        width: "30%",
                        display: "flex",
                        alignItems: "center"

                    }}>
                        <TitleBalancefy variant="subtitle1">
                            {props.name}
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
                        
                            <CommentIcon></CommentIcon> {props.comment}
                            <ThumbUpIcon></ThumbUpIcon> {props.like}
                            <RemoveRedEyeIcon></RemoveRedEyeIcon> {props.views}
                            <AccessTimeIcon></AccessTimeIcon> {props.date}
                    </div>
                </div>

            </Container>
        </>
    )
}

export default TopicBalancefy;