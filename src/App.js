import React, {useEffect, useState} from 'react';
import './App.css';
import { Characters } from './components/Characters';
import Navbar from './components/Navbar';



// Ejecuta 2 veces la llamada a la API - REVISAR !!!!

function App() {

  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fecthChars = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
    .catch(error => console.log(error))

  }

  useEffect(() => {
    fecthChars(initialUrl);
  }, [])

  return (
    <><Navbar brand="Rick and Morty App" />
    <div className="content-center bg-zinc-700">
      <Characters characters={characters} />
    </div></>

  );
}

export default App;
