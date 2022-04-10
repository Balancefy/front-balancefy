import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { content } from "./content";

export default function SelectBalancefy(props) {
  const style =  props.type === "primary" ? {
    variant: 'outlined'
  } : {
    variant: 'standard'
  }

  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  
  return(
      <FormControl variant={style.variant} sx={{ mt: props.mt, mr: props.mr, mb: props.mb, width: props.width}}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={category}
          label={props.label}
          onChange={handleChange}
        >
          {
            props.content === "category" ? 
              content.category.map((c) => {
                return <MenuItem value={c}>{c}</MenuItem>
              })
            :
            props.content === "type" ?
              content.type.map((t) => {
                return <MenuItem value={t}>{t}</MenuItem>
              })
            : 
              content.categoryTransaction.map((t) => {
                return <MenuItem value={t}>{t}</MenuItem>
              })
          }
        </Select>
      </FormControl>
  )
}