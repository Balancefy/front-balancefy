import React from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/lab';
import { Box } from '@mui/system';

export default function DateInput(props) {
    const style =  props.type === "primary" ? {
        width: '550px',
      } : {
        width: '340px',
      }

    const [value, setValue] = React.useState(new Date());

    return(
        <>  
            <Box sx={{'& > :not(style)':{ mt: props.mt, width: style.width, mb: 4 }}}>
                <DatePicker
                    label={props.label}
                    value={value}
                    onChange={(newValue) => {
                    setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Box>
        </>
    )
}