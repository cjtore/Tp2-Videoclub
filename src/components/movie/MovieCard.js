import React from 'react'
import { Link } from 'react-router-dom'
import './MovieCard.css'

function MovieCard({path, title, description, movieId}) {
  return (
    <div class="card">
        <img src={'https://image.tmdb.org/t/p/w500'+path} alt={title} />
        <div class="container">
            <h4><b>{ title }</b></h4>
            <p>{ description }</p>
        <Link to={`movie/${movieId}`}>Ver Mas</Link>
        </div>
    </div>
  )
}

export default MovieCard