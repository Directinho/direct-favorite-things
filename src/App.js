import React from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import './App.css';


function App() {
 return (
    <div className="App">
      <Navbar />
      <Background />
      <h1>Olá, Eu sou o Henrique</h1>
      <h2>Bem vindo ao meu Site onde guardo minha obras favoritas</h2>
    </div>
  );
}
export default App;
