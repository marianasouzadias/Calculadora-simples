import React from 'react';
import Calculadora from './Components/Calculadora/Calculadora'
import fundo from './assets/image/fundo.jpeg'
import './App.scss';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${fundo})`
      }}
    >
      <div className="sobreposicao">
        <Calculadora/>  
      </div>
    </div>
  );
}

export default App;

