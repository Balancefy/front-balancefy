import CommentBalancefy from "../Comment";
import avatar from "../../img/user2.jpg"


export default function CommentsSection(props) {
  const comentarios = [
    {
      id: 1,
      nome: "Bianca",
      descricao: "Que legal! Não sabia disso.",
      imagem: "/user-photos/1/avatar/user.jpg",
      children: [{
        id: 3,
        nome: "Kleber",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni ipsam eligendi dolores, totam eaque voluptatum doloremque culpa iure autem ullam. Perspiciatis tenetur esse quia laborum? Deserunt minima accusantium ea.",
        imagem: "",
        children: [{
          id: 4,
          nome: "Kleber",
          descricao: "Ela é tão necessária, né?",
          imagem: avatar,
        }]
      },
      {
        id: 3,
        nome: "Miguel",
        descricao: "Eu também não, é bem útil.",
        imagem: avatar,
        children: []
      }]
    },
    {
      id: 2,
      nome: "Beatriz",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni ipsam eligendi dolores, totam eaque voluptatum doloremque culpa iure autem ullam. Perspiciatis tenetur esse quia laborum? Deserunt minima accusantium ea.",
      imagem: avatar,
      children: []
    }
  ];

  return (
    <>
      <div style={{
        height: "400px",
        overflow: "auto",
        paddingRight: "15px"
      }}>
        {comentarios.map((comentario) => {
          return (
            <CommentBalancefy key={comentario.id} data={comentario}>{comentario.descricao}</CommentBalancefy>
          );
        })}
      </div>
    </>
  );
}
