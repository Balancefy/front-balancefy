import CommentBalancefy from "../Comment";
import avatar from "../../Images/user2.jpg"

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
            imagem={comentario.imagem}
          >{comentario.descricao}</CommentBalancefy>
        );
      })}
    </>
  );
}
