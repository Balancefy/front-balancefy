function Container(props) {
  return (
    <>
    <div style={{
      background: "#131515",
      height: props.height,
      width: props.width,
      borderRadius: props.borderRadius
    }}>
      {props.children}
    </div>
    </>
  )
}


export default Container;

