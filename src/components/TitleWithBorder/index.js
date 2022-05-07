


export default function TitleWithBorder(props){
   return(
       <>
         <div style={{width:"fit-content", margin: "0 auto"}}>
          <h2 style={{ textAlign: "center", margin: "5px" }}>{props.children}</h2>
          <div style={{backgroundColor:"#7DE2D1", height:"7px", width:"100%", borderRadius:"2px"}}>  </div>
        </div>
       </>
   ) 
}