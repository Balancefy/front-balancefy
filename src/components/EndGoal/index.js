import React from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GoalsBalancefy(props) {
    return (
    <>
      <FormControl sx={{ height: "64px", width: "480px", mt: "30px", borderRadius: "10px" }}>
        <Select
          labelId="goal-select-label"
          id="goal-select"
          value={props.value}
          defaultValue={""}
          sx={{
            backgroundColor: "#4B4B4B",
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
