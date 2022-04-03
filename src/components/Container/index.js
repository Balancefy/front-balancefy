function Container(props) {
  return (
    <>
    <div style={{
      background: "#131515",
      height: props.height,
      width: props.width,
      borderRadius: "10px"
    }}>
      {props.children}
    </div>
    </>
  )
}


export default Container;

