import React, {useState, useEffect} from 'react' 
import "./imdbID.css"

export default function ImdbID(props) {
    // console.log(props)
    let [movieID, setMovieID] = useState([])
    const privateKey = process.env.REACT_APP_KEY

    let {match} = props

    let imdbID = match.params.movie
    
    useEffect(() => {
            fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${imdbID}&r=json`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                "x-rapidapi-key": privateKey,
            }
            }).then(res => res.json())
                    .then(movie => {
                        console.log(movie);

                        setMovieID(movie)
                        // setFetching(false)
                    }) 
                
                
            }, [imdbID])
    

    return (
    
        <div className="container-moviesimdb">
            <img src={movieID.Poster} alt={movieID.Poster} width="500" height="700"/>
            <div className="container-info">
                <h2>Title: {movieID.Title}</h2>
                <h2>Year: {movieID.Year}</h2>
                <h2>Director: {movieID.Director}</h2>
                <h2>imdbRating: {movieID.imdbRating}</h2>
                <h2>Genre: {movieID.Genre}</h2>
                <h2>Summary:</h2>
                <p>{movieID.Plot}</p>
            </div>
        </div>
        )
}



// Title: "Batman v Superman: Dawn of Justice"
// Year: "2016"
// Rated: "PG-13"
// Released: "25 Mar 2016"
// Runtime: "151 min"
// Genre: "Action, Adventure, Sci-Fi"
// Director: "Zack Snyder"
// Writer: "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)"
// Actors: "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg"
// Plot: "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs."
// Language: "English"
// Country: "USA"
// Awards: "14 wins & 33 nominations."
// Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
// Ratings: (3) [{…}, {…}, {…}]
// Metascore: "44"
// imdbRating: "6.5"
// imdbVotes: "598,570"
// imdbID: "tt2975590"
// Type: "movie"
// DVD: "19 Jul 2016"
// BoxOffice: "$293,792,936"
// Production: "Warner Bros. Pictures"
// Website: "N/A"
// Response: "True"
