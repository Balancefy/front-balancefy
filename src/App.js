import React from 'react'
import MaioresGastos from './components/MaioresGastos'

function App() {

  const gastos = [
    {key:3, id: 3, desc: "Comida", porcentagem: 10, color: "#339989"},
    {key:1, id: 1, desc: "UBER", porcentagem: 80, color: "#7DE2D1"},
    {key:2, id: 2, desc: "Roupa", porcentagem: 10, color: "#5DCAB8"},
  ]
  
  return (
    <div className="App">
      <MaioresGastos data={gastos}></MaioresGastos>
    </div>
  );
}

export default App; 