function Container(props) {

  return (
    <>
    <div style={{
      background: props.backgroundColor === "#4B4B4B" ? "#4B4B4B" : "#2B2C28",
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

