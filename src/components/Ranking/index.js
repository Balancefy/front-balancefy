import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import RankPosition from "../RankPosition";
import TitleWithBorder from "../TitleWithBorder";

import api from "../../service/api";

export default function Ranking(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/accounts/rank")
      .then((res) => {
        setUsers(res.data.rank)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const Positions =
    users.map((user, indice) => {
      return (
        <RankPosition onClick={() => {
          navigate("/profile")
          localStorage.setItem('profile_id', user.id)
        }} key={user.id} position={indice+1} name={user.nome} goals={user.objetivo} progress={user.progresso}></RankPosition>
      );
    })

  return (
    <>
      <Container height="312px" width="380px" borderRadius="10px">
        <TitleWithBorder>Ranking</TitleWithBorder>
        <div style={{
          maxHeight: "26vh",
          overflow: "auto",
        }}>
          {Positions}
        </div>
      </Container>
    </>
  );
}