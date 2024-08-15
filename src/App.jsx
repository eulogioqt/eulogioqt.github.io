import React from 'react';
import wrenches from '/wrenches.png';
import photo from '/photo.jpg';
import './App.css';

function App() {

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <a href="https://www.github.com/eulogioqt" target="_blank" className='logo'
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', width: "50%", textDecoration: "none", color: "black" }}>
        <img src={photo} style={{ width: 100, height: 100, marginRight: 16 }} alt="Vite logo" />
        <h1>Eulogio Quemada</h1>
      </a>

      <h3 style={{ marginBottom: 16, marginTop: 32 }}>Working on this web...</h3>

      <div>
        <img src={wrenches} alt="Vite logo" />
      </div>

      <p className="read-the-docs" style={{ marginTop: 48 }}>
        You can view my last web project <a href="https://eulogioqt.github.io/snake-game" target="_blank">here</a>
      </p>
    </div>
  )
}

export default App
