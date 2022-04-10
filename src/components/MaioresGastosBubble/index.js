export default function MaioresGastosBubble(props) {
  const size = props.porcentagem + 100;

  const bubbleStyle = props.third ? {
    backgroundColor: `#339989`,
    marginTop: "120px"
  } : props.secondary ? {
    backgroundColor: `#5DCAB8`,
    marginTop: "80px"
  } : {
    backgroundColor: `#7DE2D1`,
    marginTop: "0px"
  }
  return (

    <>
      <div style={{
        display: "flex",
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: "50%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
        position: 'relative',
        ...bubbleStyle,
        ...props.style
      }}>
        <div style={{
          fontWeight: "bold"
        }}>
          {props.id}.{props.desc}
        </div>
        <div>
          {props.porcentagem}%
        </div>
      </div>
    </>
  );
}

// export default function Home() {
//   const gastos = [
//       { id: 3, desc: "Comida", porcentagem: 17},
//       { id: 1, desc: "UBER", porcentagem: 55},
//       { id: 2, desc: "Roupa", porcentagem: 37},
//   ]
//   return (
//       <>
//           <div className="App">
//               <MaioresGastos data={gastos}></MaioresGastos>
//           </div>
//       </>
//   );
// }