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
          
          fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(data => setTopTenMovies(data.results.slice(0, 10)))
            .catch(err => console.error(err));
    }, [])

    

    const movieCards = topTenMovies.map(movieData => {
        const date = new Date(movieData.release_date)
        const dateInUTC = date.toUTCString().slice(0, 16) 


        return (
            <MovieCard 
                key = {movieData.id}
                poster = {`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
                title ={movieData.title}
                releaseDate = {dateInUTC}
                id={movieData.id}
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


    
