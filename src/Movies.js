import React, { useState } from 'react'
import { Route, Link} from 'react-router-dom'
import './movies.css'
import ImdbID from './ImdbID'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [isFetching, setFetching] = useState(false)
    const [input, setInput] = useState("")
    const [page, setPage] = useState(1)
    const [radio, setRadio] = useState("movie")
    const privateKey = process.env.REACT_APP_KEY


    const getData = () => {
        setFetching(true)
        // setInput(input.toString())
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&type=${radio}&s=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": privateKey
            }
        }).then(res => res.json())
            .then(movie => {
                // console.log(movie);

                setMovies(movie.Search)
                setFetching(false)
            })
    }

    const searchMovie = (e) => {
        e.preventDefault()
        getData();
    }

    const fetchNextPage = () => {
        setPage(page + 1)
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&type=${radio}&s=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": privateKey
            }
        }).then(res => res.json())
            .then(movie => {
                setMovies(movie.Search)
                setFetching(false)
            })
    }

    const fetchPrevPage = () => {
        setPage(page - 1)
        fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=${page}&r=json&type=${radio}&s=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": privateKey
            }
        }).then(res => res.json())
            .then(movie => {
                console.log(movie.Search);
                setMovies(movie.Search)
                setFetching(false)
            })
    }


    return (
    
            <div>
                <form onSubmit={searchMovie}>
                    <input value={input} onChange={(e) => setInput(e.target.value)} required />
                    <label><input className="radio" type="radio" name="movie" value="movie" onChange={(e) => setRadio(e.target.value)} required />Movies</label>


                    <label><input className="radio" type="radio" name="movie" value="series" onChange={(e) => setRadio(e.target.value)} required />Series</label>
                    <button type="submit">Search</button>
                </form>

                {isFetching && <h1>Loading...</h1>}
                <div className="container-movies">
                    <ul className="list-movies">
                        {movies && movies.length > 0 ? movies.map((movie, i) => (
                            <div key={i}>
                        
                                <li className="list">{movie.Title}</li>
                                
                                <li className="list">imdbID: <Link to={`/movies/${movie.imdbID}`}>{movie.imdbID}</Link></li>
                            </div>
                        )) : null}

                    </ul>

                            {/* in case I want to open a new page we have to put the route in the main file (app.js) */}
                    <Route path={'/movies/:movie'} exact component={ImdbID}/>

                    
                </div>


                <div>
                    {movies && movies.length >= 10  ? 
                    
                    <div>
                    <button onClick={fetchPrevPage}>Previous</button>
                    <button onClick={fetchNextPage}>Next</button> 
                    </div> : null}
                </div>
            </div>
        
        
    )
}

export default Movies
