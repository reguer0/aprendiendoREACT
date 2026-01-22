
import { useState } from 'react';
import './App.css'
import { FilmSearchBar } from './components/filmSearchBar';
import { FilmCard } from './components/filmCard';
import { useFilms } from './hooks/useFilms';

function App() {
  const [filmName, setFilmName] = useState('Matrix');
  const [searchType, setSearchType] = useState('popular');
  const { filmInfo, setfilmInfo } = useFilms(filmName, searchType);

  const onsearch = (name: string) => {
    if (name) {
      setFilmName(name);
      setSearchType('search');
    } else {
      setSearchType('popular');
    }
  }

  const handleFilterChange = (newType: string) => {
    setSearchType(newType);
  };

  const filterByVotes = (ascending: boolean) => {
    ascending
      ? setfilmInfo([...filmInfo].sort((a, b) => a.vote_average - b.vote_average))
      : setfilmInfo([...filmInfo].sort((a, b) => b.vote_average - a.vote_average))
  }

  return (
    <>
      <h1>Buscador de Peliculas</h1>
      <FilmSearchBar onSearch={onsearch} filterByVotes={filterByVotes} onFilterChange={handleFilterChange} />
       
      <div className="films-container">
        {filmInfo.map((film) => (
          <FilmCard key={film.id} {...film} />
        ))}
      </div>
    </>
  )
}

export default App
