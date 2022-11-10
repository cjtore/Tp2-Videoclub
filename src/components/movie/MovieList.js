import React from 'react'
import { useLoaderData } from 'react-router-dom';
import MovieCard from './MovieCard';
import './MovieList.css'


export async function movieLoader() {
  const API = 'https://api.themoviedb.org/3/movie//popular?api_key=9688913d44ed487292fb7cf4370b9f95';

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error();

    const { results } = await response.json();
    return results;
  } catch {
    throw new Response(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}


function MovieList() {
  const movies = useLoaderData();

  console.log(movies);
  return (
    <div className='list-container'>{movies.map(movie => 
      <MovieCard path={movie.poster_path} title={movie.title} description={movie.overview} movieId={movie.id} />
    )}</div>
  )
}

export default MovieList


