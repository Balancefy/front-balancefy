import { Grid } from "@mui/material";
import Container from "../../components/Container";
import TaskBall from "../TaskBall";
import api from "../../service/api";
import React from 'react';

export default function ObjFinal(props) {

  const tasksArray = Array.from(props.tasks);

  const accomplishTask = (id) => {
    api.patch(`accounts/goals/tasks/`, id).then((res) => {
    })
      .catch(err => {
        console.log(err);
      })
  }



  return (
    <>
      <Grid container direction="column" height="90%" width="100%" flexWrap="nowrap">
        <Grid item height="100%" width="100%">
          <Container style={{ height: "30%", width: "100%", backgroundColor: "#4B4B4B", marginTop: "20px", }}>
            {props.key}
            <div style={{
              display: "flex",
              margin: "auto",
              width: "90%",
              justifyContent: "space-evenly",
              flexDirection: "column",
              height: "100%",
              position: "relative"
            }}>
              <div style={{ fontSize: "24px" }}>
                Objetivo Final
              </div>

              <div style={{ color: "#7DE2D1", fontSize: "18px" }}>
                {props.title}
              </div>

              <div style={{ fontSize: "18px" }}>
                {props.desc}
              </div>

              <div style={{ fontSize: "14px" }}>
                +{props.xp}
              </div>

              <div style={{ color: "#2B2C28" }}>
                {props.metas} Metas Concluídas
              </div>

              <div style={{
                display: "flex",
                height: "560px",
                alignItems: "center",
                flexDirection: "column",
                position: "absolute",
                overflow: 'auto',
                left: 0,
                right: 0,
                margin: "0 auto",
                bottom: -570,
              }}>
                {tasksArray.map(task => {
                  return (<TaskBall onClick={() => accomplishTask(task.id)} done={task.done} key={task.ordem} desc={task.descricao} xp={task.pontuacao} valor={!!task.valor ? task.valor.toFixed(2).replace(".", ",") : "0,00"}></TaskBall>)
                })}
              </div>
            </div>
          </Container>
        </Grid >
      </Grid >
    </>
  );
}