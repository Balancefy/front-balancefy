function Container(props) {
  return (
    <>
    <div style={{
      background: "#131515",
      height: props.height,
      width: props.width,
      left: "1509px",
      top: "36px",
      borderRadius: "10px"
    }}>
      {props.children}
    </div>
    </>
  )
}


export default Container;

