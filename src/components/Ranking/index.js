import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../Container";
import RankPosition from "../RankPosition";
import TitleWithBorder from "../TitleWithBorder";

import api from "../../service/api";

export default function Ranking(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  const toProfile = (userId) => {
      api.get(`/accounts/${userId}`)
        .then((res) => {
            navigate('/profile', {state:res.data});
        })
        .catch((err) => console.log(err))
  }

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
        <RankPosition onClick={() => {toProfile(user.id)}} key={user.id} position={indice+1} name={user.nome} goals={user.objetivo} progress={user.progresso}/>
      );
    })

  return (
    <>
      <Container height="30vh" width="380px" borderRadius="10px">
        <TitleWithBorder>Ranking</TitleWithBorder>
        <div style={{
          margin: "2vh auto",
          overflow: "auto",
        }}>
          {Positions}
        </div>
      </Container>
    </>
  );
}