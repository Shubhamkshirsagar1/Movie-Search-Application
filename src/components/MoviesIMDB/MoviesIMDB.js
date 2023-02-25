import React, {useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import "./MoviesIMDB.css";

const MoviesIMDB = () => {
  const key = "dcda42c1";
  const { imdbID } = useParams();
  console.log(imdbID);
  const [movie, setMovie] = useState({});

  const movieSearch = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&i=${imdbID}`
    );
    const data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    movieSearch();
  });

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="movieCard__section">
        <div className="movie__img">
          <img src={movie.Poster} alt="movie" />
        </div>
        <div className="movie__description">
          <div>Actors : {movie.Actors}</div>
          <div>Awards : {movie.Awards}</div>
          <div>BoxOffice : {movie.BoxOffice}</div>
          <div>DVD : {movie.DVD}"</div>
          <div>Director : {movie.Director}</div>
          <div>Genre : "{movie.Genre}</div>
          <div>Language : {movie.Language}</div>
          <div>Released : {movie.Released}</div>
          <div>imdbRating : {movie.imdbRating}</div>
          <div>imdbVotes : {movie.imdbVotes}</div>
        </div>
      </div>
    </div>
  );
};

export default MoviesIMDB;
