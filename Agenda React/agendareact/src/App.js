import React from 'react';
import logo from './logo.svg';
import './App.css';
import Agregar from './Components/Agregar';
import Mostrar from './Components/Mostrar';


function App() {
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="Agregar">
      <Agregar/></div>
      <div className="Lista"><Mostrar/></div>    
    </div>
  );
}

export default App;
