import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'

function Moviecard({ movie }) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src={movie.Poster} alt={movie.Title} />
                <div className='card-overlay' />
                <span className='card-year'>{movie.Year}</span>
            </div>
            <div className='card-content'>
                <span className='card-title'>{movie.Title}</span>
                <Link to={`movie/${movie.imdbID}`} className='card-action'>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Moviecard