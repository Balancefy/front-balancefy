import Avatar from "../Avatar";
import Container from "../Container";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Margin } from "@mui/icons-material";
import AvatarBalancefy from "../Avatar";
import TitleBalancefy from "../Title";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';


function CommentBalancefy(props) {
  return (
    <>
      <Container
        height="294px"
        width="36%"
        borderRadius
      >
        <div
          style={{
            height: "100%",
            width: "90%",
            margin: "auto",
            paddingTop: "20px"
          }}
        >
          <div
            style={{
              width: "10%",
              float: "left",
              display: "flex",
              alignItens: "center",
              justifyContent: "center",
            }}
          >
            <AvatarBalancefy width="50px"></AvatarBalancefy>
          </div>

          <div
            style={{
              width: "40%",
              float: "left",
              display: "flex",
              alignItens: "center",
              justifyContent: "left",
              height: "50px",
              paddingTop: "12px",
              paddingLeft: "20px",
            }}
          >
            <TitleBalancefy variant="h3">Bianca</TitleBalancefy>
          </div>

          <div
            style={{
              width: "50%",
              float: "left",
              display: "flex",
              alignItens: "center",
              justifyContent: "right",
              height: "50px",
              paddingTop: "12px",
              paddingLeft: "20px",
            }}
          >
            <AccessAlarmIcon></AccessAlarmIcon>
            20m
          </div>

          <div
            style={{
              paddingLeft: "83px",
            }}
          >
            <TitleBalancefy variant="h4"> Muito díficil... </TitleBalancefy>
          </div>

          <div style={{
              paddingLeft: "83px",
              paddingTop: "8px"
          }}>
            Mostrar menos
            <ChangeHistoryIcon style={{
                paddingTop: "12px",
            }}></ChangeHistoryIcon>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CommentBalancefy;
