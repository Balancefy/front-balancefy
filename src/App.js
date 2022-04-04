import React from 'react'
import MaioresGastos from './components/MaioresGastos'

function App() {

  const gastos = [
    { id: 1, desc: "UBER", porcentagem: "55"},
    { id: 2, desc: "UBER", porcentagem: "37"},
    { id: 3, desc: "Roupa", porcentagem: "17"}
  ]
  
  return (
    <div className="App">
      <MaioresGastos data={gastos}></MaioresGastos>
    </div>
  );
}

export default App; 
