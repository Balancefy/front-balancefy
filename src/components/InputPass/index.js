import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";

export default function InputPass(props) {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    showPassword: false,
  }); 


  const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
  };

  return(
    <FormControl sx={{ m: 0,  width: props.width}}>
      <InputLabel htmlFor="filled-adornment-password">{props.label}</InputLabel>
      <OutlinedInput 
        type={values.showPassword ? 'text' : 'password'}
        label={props.label} 
        value={props.password}
        onChange={props.onChange}
        required
        endAdornment={
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        }
      />
    </FormControl>
  )
}