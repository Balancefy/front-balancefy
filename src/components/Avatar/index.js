import Avatar from "@mui/material/Avatar";

function AvatarBalancefy(props) {
    return (
    <>
        <Avatar onClick={props.onClick} src={props.imageAvatar}
            style={{
                width: props.width,
                height: props.width,
                backgroundColor: "#7DE2D1",
                border: "2px solid Black",
                borderRadius: "50%",
                ...props.style
            }}>
            {props.children}
        </Avatar>
    </>
    )
}

export default AvatarBalancefy;


// <AvatarBalancefy imageAvatar="https://avatars.githubusercontent.com/u/79324215?v=4" width="50px" />
