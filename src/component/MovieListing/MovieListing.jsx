import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import Moviecard from '../MovieCard/Moviecard'

function MovieListing() {

    const { movies } = useSelector((state) => state.movies)

  return (
    <div className='movie-container'>
      {movies && movies.map((movie) => (
        <Moviecard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieListing
