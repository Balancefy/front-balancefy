import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

export default function SelectBalancefy(props) {
  const style =  props.type === "primary" ? {
    variant: 'outlined'
  } : {
    variant: 'standard'
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return(
      <FormControl variant={style.variant} sx={{ mt: props.mt, mr: props.mr, width: props.width}}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={age}
          label={props.label}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
        </Select>
      </FormControl>
  )
}