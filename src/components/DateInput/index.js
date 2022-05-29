import React from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import  brLocale from 'date-fns/locale/pt-BR';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


export default function DateInput(props) {
    const style = props.type === "primary" ? {
        width: '550px',
    } : {
        width: props.width,
    }

    return (
        <>
            <Box sx={{ '& > :not(style)': { mt: props.mt, width: style.width } }}>
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
                    <DatePicker
                        label={props.label}
                        value={props.value}
                        onChange={props.onChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </Box>
        </>
    )
}