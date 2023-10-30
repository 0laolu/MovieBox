import { useState, useEffect } from "react";
import AllMoviesCard from "./AllMoviesCard";

export default function AllMoviesData() {
    const [allTrendingMovies, setAllTrendingMovies] = useState([])
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
            .then(data => setAllTrendingMovies(data.results))
            .catch(err => console.error(err));
    }, [])

    // console.log(allTrendingMovies)

    const allMovieCards = allTrendingMovies.map(allMovieData => {
        console.log(allMovieData)

        const voteRating = allMovieData.vote_average
        const rating = Math.round((voteRating / 10) * 100)
        
        const tomatoRate = Math.floor(Math.random() * 26) + 75
        

        return (
            <AllMoviesCard
                key = {allMovieData.id}
                poster = {`https://image.tmdb.org/t/p/original/${allMovieData.poster_path}`}
                title ={allMovieData.title}
                releaseDate = {allMovieData.release_date}
                id={allMovieData.id}
                peopleRating = {rating}
                tomatoRating = {tomatoRate}
            />
        )
    })

    return (
        <>
            {allMovieCards}
        </>
    )
}