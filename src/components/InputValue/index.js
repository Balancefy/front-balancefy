import { Box, InputAdornment, TextField } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types';
import NumberFormat from "react-number-format";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function InputValue(props) {
  const style =  props.type === "primary" ? {
    width: '550px',
    variant: 'outlined'
  } : {
    width: '340px',
    variant: 'standard'
  }
  
  return(
    <Box sx={{'& > :not(style)': { mt: props.mt, width: props.width, }}}> 
     <TextField
        label={props.label}
        value={props.value}
        onChange={props.onChange} 
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
          startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          endAdornment: props.adornment
        }}
        variant={style.variant}
      />
    </Box>
  )
}