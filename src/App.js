import React, {useEffect, useState} from 'react';
import './App.css';
import { Characters } from './components/Characters';
import Navbar from './components/Navbar';
import { Pagination } from './components/Pagination';



// Ejecuta 2 veces la llamada a la API - REVISAR !!!!

function App() {

  const [characters, setCharacters] = useState([]);
  const [info,setInfo] = useState ({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fecthChars = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch(error => console.log(error))

  }

  useEffect(() => {
    fecthChars(initialUrl);
  }, [])

  const onPrevious = () => {
    fecthChars(info.prev);
  }

  const onNext = () => {
    fecthChars(info.next);
  }

  return (
    <><Navbar brand="Rick and Morty App" />
    <div className="content-center bg-zinc-700">
      <Pagination 
        prev={info.prev} 
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Characters characters={characters} />
      <Pagination 
        prev={info.prev} 
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </div>
    </>

  );
}

export default App;
