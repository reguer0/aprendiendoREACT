import type { FilmType } from '../types/types';
import { useEffect, useState } from 'react';
const API_KEY = '6693fa0919381e56631e2f21f49c8bfc'; // Reemplaza con tu clave de API
const BASE_URL = 'https://api.themoviedb.org/3';

//TODO: crear como custom hook, y manejar errrores
export function useFilms(filmName: string , type: string = 'popular') {
    const [filmInfo, setfilmInfo] = useState<FilmType[]>([]); 
 
    useEffect(() => {   
        const getApiData = async (query: string) => {   
            let url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}`;

            if (type === 'search' && query) {
                url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`;
            }

            const response = await fetch(url);
            const result = await response.json();          
        
            const films : FilmType[] = result.results
                .map((film: FilmType) => ({
                    id:film.id,
                        title: film.title,
                        poster_path: film.poster_path,
                        release_date: film.release_date,
                        overview: film.overview,
                        vote_average: film.vote_average,
                        vote_count: film.vote_count,
                    }));

            setfilmInfo(films );         
        }; 
        
        getApiData(filmName);
    }, [filmName, type]);  

    return { filmInfo, setfilmInfo };
}