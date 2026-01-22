
import {  useState } from 'react';
import './App.css'
import { FilmSearchBar } from './components/filmSearchBar'; 
import { FilmCard } from './components/filmCard';
import { useFilms } from './hooks/useFilms';

function App() {
const [filmName, setFilmName] = useState('Matrix');
const { filmInfo, setfilmInfo } = useFilms(filmName);

const onsearch = (name:string) =>{
  setFilmName(name);
}

const filterByVotes= (ascending: boolean) => {  
  ascending 
   ? setfilmInfo([...filmInfo].sort((a,b)=> a.vote_average - b.vote_average))
   : setfilmInfo([...filmInfo].sort((a,b)=> b.vote_average - a.vote_average))
}

  return (
    <>
      <h1>Buscador de Peliculas</h1>
      <FilmSearchBar  onSearch={onsearch} filterByVotes={filterByVotes} />
      {filmInfo.map((film) => (
        <FilmCard key={film.id} {...film} />
      ))}
    </>
  )
}

export default App
