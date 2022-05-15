import TitleBalancefy from "../Title";

export default function TitleWithDot(props){
    return(
        <>
            <TitleBalancefy variant="h1b">{props.children}</TitleBalancefy>
            <TitleBalancefy variant="h1b" color="#7DE2D1">.</TitleBalancefy>
            <br/>
        </>
    ) 
 }