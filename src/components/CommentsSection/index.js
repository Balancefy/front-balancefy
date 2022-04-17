import CommentBalancefy from "../Comment";

export default function CommentsSection(props) {
  const comentarios = [
    {
      id: 1,
      nome: "Verdinha",
      descricao: "muito fácil...",
      comentarios: [
        {
          id: 2,
          nome: "Minóquio",
          descricao: "mó trampo",
        },
      ],
    },
  ];

  return (
    <>
      {comentarios.map((comentario) => {
        return (
          <CommentBalancefy
            name={comentario.nome}
            data={comentario.comentarios}
          ></CommentBalancefy>
        );
      })}
    </>
  );
}
