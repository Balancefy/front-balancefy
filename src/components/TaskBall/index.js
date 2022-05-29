import ButtonBalancefy from '../Button';
import CheckIcon from '@mui/icons-material/Check';
import React from 'react';
export default function TaskBall(props) {
  const clicked  = props.done == 1;

  
  return (
    <>
      <div style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "25px",
      }}>
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div style={{
            width: "80px",
            height: "80px",
            background: "#7DE2D1",
            borderRadius: "100%",
            border: "solid 9px #4B4B4B",
            position: "relative",
            zIndex: 2
          }}>
          </div>
          <hr style={{
            display: props.goal ? "none" : "initial",
            border: "3px solid #4B4B4B", top: "-55px", width: "5px", height: "50px", position: "absolute",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: 1
          }}></hr>
        </div>

        <div style={{
          display: "flex",
          width: "300px",
          height: "80px",
          background: "#4B4B4B",
          alignItems: "center",
          borderRadius: "10px",
          justifyContent: "space-between",
          position: "relative",
          fontSize: "12px",
          marginLeft: "30px",
          flexDirection: "row",
          paddingTop: "5px",
          paddingBottom: "5px",
          overflow: "hidden"
        }}>
          {props.done == 1 && clicked ? <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            position: "absolute",
            background: "rgba(0,0,0,0.8)",
            fontSize: "18px",
            color: "#7de2d1",
            zIndex: 2,
            top: 0,
            left: 0
          }}>
            Concluído!
          </div> : <></>}

          <div style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "10px"
          }}>

            <div style={{
              fontSize: "12px",
            }}>
              {props.desc}
            </div>
            <div style={{
              color: "#A5A5A5"
            }}>
              +{props.xp}XP
            </div>
            <div style={{
              color: "#A5A5A5"
            }}>
              R$ {props.valor}
            </div>
          </div>
          <ButtonBalancefy onClick={() => {
            props.onClick()
            window.location.reload()
          }} style={{ width: "30px", height: "30px", marginTop: "-20px", borderRadius: "5px", marginRight: "10px" }} type="submit">
            <CheckIcon></CheckIcon>
          </ButtonBalancefy>
        </div>
      </div>
    </>
  );
}