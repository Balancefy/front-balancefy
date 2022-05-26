


export default function TitleWithBorder(props){
   return(
       <>
         <div style={{width:"fit-content", paddingTop: "1vh", margin: "0 auto"}}>
          <h2 style={{ margin: "3px" }}>{props.children}</h2>
          <hr style={{
            margin: 0,
            backgroundColor: "#7DE2D1",
            border: "3px solid #7DE2D1",
            borderRadius: "3px"
          }}></hr>
        </div>
       </>
   ) 
}