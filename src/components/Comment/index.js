import React from 'react';
import Container from "../Container";
import AvatarBalancefy from "../Avatar";
import TitleBalancefy from "../Title";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import { default as Reply } from '../Button';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Box, IconButton } from "@mui/material";
import Input from "../Input";
import avatar from "../../img/user3.jpg"



function CommentBalancefy(props) {
  let comment = props.data
  const [showMore, setShowMore] = React.useState(false);
  const [replying, setReplying] = React.useState(false);
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false)

  return (
    <>
      <Container height="auto" width="100%" >
        <div
          style={{
            height: "100%",
            width: "100%",
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center"
            }}>
              <AvatarBalancefy imageAvatar={comment.imagem} width="40px"></AvatarBalancefy>

              <TitleBalancefy style={{ marginLeft: "10px" }} variant="h3">{comment.nome}</TitleBalancefy>
            </div>
            <div
              style={{
                display: "flex",
                alignItens: "center",
              }}
            >
              <AccessAlarmIcon></AccessAlarmIcon>
              20m
            </div>
          </div>
          <div style={{
            marginTop: "10px",
            marginLeft: "45px"
          }}>
            {props.children}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}>
              <div style={{
                width: "60px",
                display: "flex",
                justifyContent: "space-between"
              }}>
                <div onClick={() => setLike(!like)} style={{ cursor: "pointer" }}>
                  {like ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}

                </div>
                <div onClick={() => setDislike(!dislike)} style={{ cursor: "pointer" }}>
                  {dislike ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
                </div>
              </div>
              <Reply onClick={() => setReplying(!replying)} style={{ height: "30px", backgroundColor: "#2b2c28", color: "#fff" }}>{!replying ? "Responder" : "Cancelar"}</Reply>
            </div>
          </div>

          {replying &&
            <Box sx={{display:"flex",flexDirection:"column"}}>
              <Box sx={{ display: "flex", alignItems: "center", mt: 1, ml: 4, mb: 2 }}>
                <AvatarBalancefy imageAvatar={avatar} width="45px" />
                <Box sx={{ ml: 2, width: "85%" }}>
                  <Input label="Adicione um comentario" width="100%" />
                </Box>
              </Box>
              <Reply style={{ height: "30px", marginLeft: "auto" }}>Confirmar</Reply>
            </Box>}


          {Array.isArray(comment.children) && comment.children.length ?
            <>

              <div onClick={() => setShowMore(!showMore)} style={{
                display: "flex",
                paddingTop: "8px",
                cursor: "pointer",
                fontWeight: "bold",
                alignItems: "center",
                userSelect: "none",
                marginLeft: "45px",
                width: "fit-content"
              }}>
                {showMore ? "Mostrar menos" : "Mostrar mais"}
                <ChangeHistoryIcon style={{ width: "12px", marginLeft: "5px", transform: showMore ? '' : 'rotate(180deg)' }} />
              </div>
              <div style={{
                marginLeft: "40px",
              }}>
                {showMore && comment.children.map(data => <CommentBalancefy data={{ ...data }}>{data.descricao}</CommentBalancefy>)}
              </div>
            </> :
            <>
            </>
          }
        </div>
      </Container>
    </>
  );
}

export default CommentBalancefy;
