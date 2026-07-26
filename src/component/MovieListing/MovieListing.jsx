import React from 'react'
import './MovieListing.scss'
import { useSelector } from 'react-redux'
import Moviecard from '../MovieCard/Moviecard'

function MovieListing() {

    const { movies } = useSelector((state) => state.movies)

    if (movies && movies.length === 0) {
        return (
            <div className='empty-state'>
                <span className='empty-icon'>🎬</span>
                <h4>No movies found</h4>
                <p>Try searching for a different title</p>
            </div>
        )
    }

  return (
    <div className='movie-container'>
      {movies && movies.map((movie) => (
        <Moviecard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieListing