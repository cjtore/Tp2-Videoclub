import React from 'react'
import { useLoaderData } from 'react-router-dom';
import './MovieDetails.css'


export async function movieDetailLoader({ params }) {
  const API = `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=9688913d44ed487292fb7cf4370b9f95`;
  try { 
    const response = await fetch(API);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch {
    throw new Response(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}

function MovieDetail() {

  const movie = useLoaderData();
  const urlsearch = `https://www.amazon.com/s?k=movie `;
  console.log(movie);
  
  return (
<div class="card-detail">
  <div class="card_left">
    <img src={'https://image.tmdb.org/t/p/w500'+movie.backdrop_path}/>
  </div>
  <div class="card_right">
    <h1>{movie.title}</h1>
    <div class="card_right__details">
      <ul>
        <li>{movie.tagline}</li>
        <li>{movie.runtime}</li>
        <li>{movie.release_date}</li>
      </ul>
      <div class="card_right__review">
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">Trailer</a>
      </div>
      <div class="card_right__button">
        <a href= {urlsearch+movie.title} target="_blank">COMPRAR</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default MovieDetail