import { Box, TextField } from "@mui/material";

export default function Input(props) {
  const style =  props.type === "primary" ? {
    width: props.width,
    variant: 'outlined'
  } : {
    width: props.width,
    variant: 'standard'
  }
  
  return(
    <Box sx={{'& > :not(style)': { mt: props.mt, width: style.width}}}>
      <TextField multiline rows={props.row} label={props.label} color="primary" variant={style.variant} onChange={props.onChange} value={props.value} />
    </Box>
  )
}