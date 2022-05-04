import CommentBalancefy from "../Comment";
import avatar from "../../Images/user2.jpg"

const apiUrl = process.env.REACT_APP_API_URL

export default function CommentsSection(props) {
  const comentarios = [
    {
      id: 1,
      nome: "Ana",
      descricao: "muito fácil...",
      imagem: avatar
    },
  ];

  return (
    <>
      {comentarios.map((comentario) => {
        return (
          <CommentBalancefy
            name={comentario.nome}
            imagem={apiUrl + comentario.imagem}
          >{comentario.descricao}</CommentBalancefy>
        );
      })}
    </>
  );
}
