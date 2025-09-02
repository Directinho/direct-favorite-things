import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Background from './components/Background';
import './App.css';

function App() {
  const altTextRef = useRef(null);

  useEffect(() => {
    const words = ['Jogos', 'Animes', 'Mangás', 'Code'];
    const colors = ['red', 'yellow', 'blue', 'cyan', 'purple', 'orange'];

    function getRandomItem(array) {
      return array[Math.floor(Math.random() * array.length)];
    }

    function updateText() {
      if (altTextRef.current) {
        const randomWord = getRandomItem(words);
        const randomColor = getRandomItem(colors);
        altTextRef.current.textContent = randomWord;
        altTextRef.current.style.color = randomColor;
        altTextRef.current.style.textShadow = `0 0 3px ${randomColor}, 0 0 5px ${randomColor}, 0 0 10px ${randomColor}`;
      }
    }

    updateText();
    const interval = setInterval(updateText, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Background />
      <main className="main-content">
        <div className="content">
          <h1>Olá, seja bem-vindo ao meu site</h1>
          <h2>Aqui é onde eu guardo minhas coisas favoritas</h2>
          <h2 className="texto-alt">
            Aqui você verá <span className="alt-text" ref={altTextRef}></span>
          </h2>
          <div className="button-container">
            <button className="btn">Iniciar</button>
            <button className="btn">Sobre</button>
          </div>
        </div>
      </main>
      <About />
    </div>
  );
}

export default App;