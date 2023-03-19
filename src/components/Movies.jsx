import React from "react";
import "../styles/movies.css";
import axios from "axios";
import { useEffect } from "react";
import { useGlobalContext } from "./context";
import { useState } from "react";
import { Link } from "react-router-dom";
function Movies() {
  const { movie } = useGlobalContext();
  return (
    <section className="movie-page">
      <div className="MyCardContainer">{movie.map((currentMovie) => {
        return(
          <Link to={`/${currentMovie.imdbID}`}>
            <div className="MyCard">
                <img className="Mycard-Image" src={currentMovie.Poster} alt={currentMovie.Title} />
              </div>
          </Link>
        )
      })}</div>
    </section>
  );
}
export default Movies;
