import React, { useState, useEffect } from 'react'
import movieApi from '../../api/MovieApi'
import { APIKEY } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'
import MovieListing from '../MovieListing/MovieListing'
import './Home.scss'

function Home() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor";

            const res = await movieApi.get(`?apikey=${APIKEY}&s=${searchKey}&type=movie`)
                .catch((error) => {
                    console.error("Error", error)
                })

            if (res?.data?.Search) {
                dispatch(addMovie(res.data.Search))
            } else {
                dispatch(addMovie([]))
            }
        }

        const debounce = setTimeout(() => {
            fetchMovies();
        }, 500);

        return () => clearTimeout(debounce);
    }, [search, dispatch]);

    return (
        <div className='home-page'>
            <div className='home-hero'>
                <span className='hero-eyebrow'>CineVault</span>
                <h1>Find your next watch</h1>
                <p>Search thousands of movies by title</p>

                <div className='search-box'>
                    <span className='search-icon'>⌕</span>
                    <input
                        type="text"
                        placeholder='Search movies... e.g. Thor'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className='home-results'>
                <MovieListing />
            </div>
        </div>
    )
}

export default Home