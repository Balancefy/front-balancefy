import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GoalsBalancefy(props) {
  const style = props.page === "home" ? {
    width:"480px",
    backGroundColor:"#4B4B4B",
    fontSize:"20px",
    marginTop:"30px"  
  } : {
    width:"400px",
    backGroundColor:"#131515",
    fontSize:"24px",
    fontWeight:"bold"
  }
    return (
    
    <>
      <FormControl sx={{ height: "64px", width: style.width, mt: props.page === "home" ? "30px" : "0", borderRadius: "10px" }}>
        <Select
          labelId="goal-select-label"
          id="goal-select"
          value={props.value}
          defaultValue={""}
          sx={{
            backgroundColor: style.backGroundColor,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            color: "#7DE2D1"
          }}
          onChange={props.onChange}
        >
          { props.data !== undefined ? 
          props.data.map(goal => {
            return <MenuItem key={goal.id} value={goal.id}>{goal.descricao}</MenuItem>
          }) : <></>}
        </Select>
      </FormControl>
    </>
  );
}
