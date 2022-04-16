import React, { useState } from 'react';
import Container from "../../components/Container";
import images from "../../Images/login.png";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

function LoginLoading(props) {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(progress >= 100 ? 0 : progress + 10);

      if (progress === 100) {
        console.log(progress)
        props.history.replace('/')
      }
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <>
      <Container
        style={{ marginTop: "1.5%" }}
        margin="auto"
        height="95vh"
        width="90%"
      >
        <div style={{ display: "flex" }}>
          <Box sx={{ width: "60%", display: "flex", alignItems: "center" }}>
            <CircularProgress />

          </Box>
          <Box>
            <img style={{ height: "95vh" }} src={images} />
          </Box>
        </div>
      </Container>
    </>
  );
}

export default LoginLoading;
