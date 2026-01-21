import type { FilmType } from '../types/types';
export function FilmCard(film: FilmType) {
    return (
        <div>
            <h2>{film.title}</h2>
            <p>Release Date: {film.release_date}</p>
            {film.poster_path && (
                <img 
                    src={`https://image.tmdb.org/t/p/w200${film.poster_path}`} 
                    alt={`Poster of ${film.title}`} 
                />
            )}           
            <p>{film.overview}</p>
            <p>Rating: {film.vote_average} ({film.vote_count} votes)</p>
        </div>
    );
}