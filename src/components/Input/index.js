import { Box, TextField } from "@mui/material";

export default function Input(props) {
  const style =  props.type === "primary" ? {
    width: '550px',
    variant: 'outlined'
  } : {
    width: '220px',
    variant: 'standard'
  }
  
  return(
    <Box component="form" sx={{'& > :not(style)': { mt: props.mt, width: style.width, }}}>
      <TextField label={props.label} color="primary" variant={style.variant} />
    </Box>
  )
}