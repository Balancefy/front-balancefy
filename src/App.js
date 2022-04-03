import React from 'react'
import Roadmap from './components/Roadmap';

function App() {

  const goals = [
    { id: 1, desc: "Viajar para a Australia", xp:"4000"},
    { id: 1, desc: "task 1", xp:"400"},
    { id: 2, desc: "task 2", xp:"400"},
    { id: 3, desc: "task 3", xp:"400"},
    { id: 4, desc: "task4", xp:"400"}
  ]
  return (
    <div className="App">
      <Roadmap data={goals}></Roadmap>
    </div>
  );
}

export default App; 
