import MovieCard from "./MovieCard"

import { useEffect, useState } from "react"



export default function MoviesList() {

    const [topTenMovies, setTopTenMovies] = useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => setTopTenMovies(data.results.slice(0, 10)))
            .catch(err => console.error(err));
    }, [])

    

    const movieCards = topTenMovies.map(movieData => {
        const voteRating = movieData.vote_average
        const rating = Math.round((voteRating / 10) * 100)
        
        const tomatoRate = Math.floor(Math.random() * 26) + 75

        return (
            <MovieCard 
                key = {movieData.id}
                poster = {`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
                title ={movieData.title}
                releaseDate = {movieData.release_date}
                id={movieData.id}
                peopleRating = {rating}
                tomatoRating = {tomatoRate}
            />
        )
    })


    // rendering the MainContent on the webpage
    return (
        <>
            {movieCards}
        </>
    )
}


    
