import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../../service/api";
import { content } from "./content";

export default function SelectBalancefy(props) {
  const [goalsCategory, setGoalsCategory] = useState([]);

  const style =  props.type === "primary" ? {
    variant: 'outlined'
  } : props.type==="home" ? {
    variant: 'outlined',
    color: '#131515'
  } : {
    variant: 'standard'
  }

  useEffect(() => {
    if(props.content === "category") {
      api.get("/goals")
        .then((res) => {
          setGoalsCategory(res.data.data)
        })
    }
  }, [])
  
  return(
      <FormControl variant={style.variant} sx={{ mt: props.mt, mr: props.mr, mb: props.mb, width: props.width, backgroundColor: style.color, borderRadius: "5px"}}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={props.value}
          label={props.label}
          onChange={props.onChange}
        >
          <MenuItem key="" value=""></MenuItem>
          {
            props.content === "category" ? 
              goalsCategory.map((c) => {
                return <MenuItem key={c.id} value={c.id}>{c.categoria}</MenuItem>
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