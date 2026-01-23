import type { FilmType } from '../types/types';
import './filmCardStyle.css';
export function FilmCard(film: FilmType) {
    return (
        <div className="film-card">
            <h2>{film.title}</h2>
            <p>Release Date: {film.release_date}</p>
            
            {film.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} 
                    alt={`Poster of ${film.title}`} 
                />
            )}  
             <p className="rating">{film.vote_average} ({film.vote_count} votes)</p>         
            <p className="overview">{film.overview}</p>
           
        </div>
    );
}