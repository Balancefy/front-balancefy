import CommentBalancefy from "../Comment";
import avatar from "../../Images/user2.jpg"

const apiUrl = process.env.REACT_APP_API_URL

export default function CommentsSection(props) {
  const comentarios = [
    {
      id: 1,
      nome: "Bianca",
      descricao: "Que legal! Não sabia disso.",
      imagem: apiUrl + avatar,
      children: [{
        id: 2,
        nome: "Kleber",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni ipsam eligendi dolores, totam eaque voluptatum doloremque culpa iure autem ullam. Perspiciatis tenetur esse quia laborum? Deserunt minima accusantium ea.",
        imagem: avatar,
        children: [{
          id: 2,
          nome: "Kleber",
          descricao: "Ela é tão necessária, né?",
          imagem: apiUrl + avatar,
        }]
      },
      {
        id: 3,
        nome: "Miguel",
        descricao: "Eu também não, é bem útil.",
        imagem: apiUrl + avatar,
        children: []
      }]
    },
    {
      id: 1,
      nome: "Beatriz",
      descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni ipsam eligendi dolores, totam eaque voluptatum doloremque culpa iure autem ullam. Perspiciatis tenetur esse quia laborum? Deserunt minima accusantium ea.",
      imagem: apiUrl + avatar,
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
            <CommentBalancefy data={comentario}>{comentario.descricao}</CommentBalancefy>
          );
        })}
      </div>
    </>
  );
}
