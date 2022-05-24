import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { content } from "./content";

export default function SelectBalancefy(props) {
  const style =  props.type === "primary" ? {
    variant: 'outlined'
  } : {
    variant: 'standard'
  }
  
  return(
      <FormControl variant={style.variant} sx={{ mt: props.mt, mr: props.mr, mb: props.mb, width: props.width}}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={props.value}
          label={props.label}
          onChange={props.onChange}
        >
          {
            props.content === "category" ? 
              content.category.map((c) => {
                return <MenuItem key={c} value={c}>{c}</MenuItem>
              })
            :
            props.content === "type" ?
              content.type.map((t) => {
                return <MenuItem key={t} value={t}>{t}</MenuItem>
              })
            : 
              content.categoryTransaction.map((t) => {
                return <MenuItem key={t} value={t}>{t}</MenuItem>
              })
          }
        </Select>
      </FormControl>
  )
}