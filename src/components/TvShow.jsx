import React from 'react'
import '../styles/tvShow.css'
import { useState,useEffect } from 'react';
import { API_URL } from './context';
import { Link, useParams } from 'react-router-dom';

function TvShow() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const {id} = useParams();
  const handleTrailerSection = ()=>{
    window.open(`https://www.youtube.com/results?search_query=${movie.Title}+trailer`)
  }
  const handleDownloadSection = ()=>{
    window.open(`https://hdhub4u.health/?s=${movie.Title}`)
  }
  const getMovies = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      } 
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(`${API_URL}&i=${id}`);
  }, [id]);
  return (
    <div className='movie-section'>
      <div className='Mymovie-card'>
        <img src={movie.Poster} alt="" />
        <h1>Title : {movie.Title}</h1>
        <h1>Year : {movie.Year}</h1>
        <h1>Type : {movie.Type}</h1>
        <button type="button" id='back' onClick={handleTrailerSection} class="btn btn-outline-warning">Trailer</button>
        <button type="button" id='back' onClick={handleDownloadSection} class="btn btn-outline-warning">DOWNLOAD</button>
        <Link to='/'>
        <button type="button" id='back' style={{width:"27.5rem"}} class="btn btn-outline-warning">Go Back</button>
        </Link>
      </div>
    </div>
  )
}

export default TvShow