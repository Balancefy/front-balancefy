import CommentBalancefy from "../Comment";
import avatar from "../../img/user2.jpg"


export default function CommentsSection(props) {
  const comentarios = Array.from(props.comments).reverse(); 
  const topicId = props.topicId;
  
  return (
    <>
      <div style={{
        height: "400px",
        overflow: "auto",
        paddingRight: "15px"
      }}>
        {comentarios.map((comentario) => {
          return (
            <CommentBalancefy key={comentario.id} topicId={topicId} data={comentario}>{comentario.descricao}</CommentBalancefy>
          );
        })}
      </div>
    </>
  );
}
