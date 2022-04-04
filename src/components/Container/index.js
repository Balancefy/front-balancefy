function Container(props) {
  return (
    <>
    <div style={{
      background: "#131515",
      height: props.height,
      width: props.width,
      left: "1509px",
      top: "36px",
      borderRadius: props.borderRadius
    }}>
      {props.children}
    </div>
    </>
  )
}


export default Container;

/*      height: "620px",
width: "380px",
*/