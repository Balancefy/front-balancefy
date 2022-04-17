

export default function PageIcon(props) {

    const borderStyle = props.outlined ? {
        borderRadius: "10px",
        border: "1px solid #7DE2D1"
    } : {};

    return(
        <>
            <div onClick={props.onClick} style={{
                margin: "20px 0",
                cursor: "pointer",
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                ...props.style
            }}>
                {props.selected ? <div style={{
                    position: "absolute",
                    height: '100%',
                    width: "50px",
                    borderRadius:"45%",
                    backgroundColor: "#7DE2D1",
                    left: -35,
                    top: 0
                }}/> : <></>}
                <div style={{
                    display: "flex",
                    ...borderStyle
                }}>
                    {props.icon}
                </div>
            </div>
        </>
    )
}