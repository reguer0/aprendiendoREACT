import { useState } from "react";
import type { searchFilmProps } from "../types/types";

export function FilmSearchBar({ onSearch }: searchFilmProps) {
      const [inputValue, setInputValue] = useState<string>('');
    return (
        <div>
            <input 
                type="text" 
                placeholder="Buscar peliculas..." 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <button onClick={() => onSearch(inputValue)}>Buscar</button>
        </div>
    );
}
