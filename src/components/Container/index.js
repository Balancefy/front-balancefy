function Container(props) {

  return (
    <>
    <div style={{
      background: props.backgroundColor === "#4B4B4B" ? "#4B4B4B" : "#131515",
      height: props.height,
      width: props.width,
      borderRadius: "10px",
      margin: props.margin,
      maxHeight: props.height,
      ...props.style
    }}>
      {props.children}
    </div>
    </>
  )
}


export default Container;

