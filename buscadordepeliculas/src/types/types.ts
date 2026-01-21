export interface FilmType{
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    vote_count: number;
}

export interface searchFilmProps {
  onSearch: (newFilm: string) => void;
}