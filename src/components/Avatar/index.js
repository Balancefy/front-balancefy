import Avatar from "@mui/material/Avatar";

function AvatarBalancefy(props) {
    return (
    <>
        <Avatar src={props.src}
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