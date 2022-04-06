import { LocalizationProvider } from '@mui/lab';
import React from 'react'
import AdapterDayjs from '@mui/lab/AdapterDayjs'
import ButtonChangePass from './components/ButtonChangePass';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="App">
          <ButtonChangePass>Alterar Senha</ButtonChangePass>
        </div>
      </LocalizationProvider>
    </>
  );
}

export default App; 
