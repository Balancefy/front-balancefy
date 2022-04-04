import Avatar from "@mui/material/Avatar";

function AvatarBalancefy(props) {
    return (
    <>
        <Avatar src={props.imageAvatar}
        style={{
            width: props.width,
            height: props.width,
            border: "2px solid Black",
            borderRadius: "50%"
        }}/>
    </>
    )
}

export default AvatarBalancefy;


// <AvatarBalancefy imageAvatar="https://avatars.githubusercontent.com/u/79324215?v=4" width="50px" />
