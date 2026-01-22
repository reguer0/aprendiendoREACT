import { useState } from "react";
import type { filterByVotesProps, searchFilmProps } from "../types/types";

export function FilmSearchBar({ onSearch, filterByVotes }: searchFilmProps & filterByVotesProps) {
      const [inputValue, setInputValue] = useState<string>('');
      const [ascending, setAscending] = useState<boolean>(true);


      const filter = () =>{
        const newAscending = !ascending;
        setAscending(newAscending);
        filterByVotes(newAscending);
      }
      
    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar peliculas..." 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={() => onSearch(inputValue)}>Buscar</button>
            <button onClick={filter}>Filtrar por Rating   {ascending ? '▲' : '▼'}</button>
        </div>
    );
}
