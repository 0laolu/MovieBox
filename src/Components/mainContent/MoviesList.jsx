import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"



export default function MoviesList() {

    const [trendingMovies, setTrendingMovies] = useState([])
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
            .then(data => setTrendingMovies(data.results.slice(0, 10)))
            .catch(err => console.error(err));

            
    }, [])

    const genreNames = {
        28: 'Action',
        12: 'Adventure',
        16: 'Animation',
        35: 'Comedy',
        80: 'Crime',
        99: 'Documentary',
        18: 'Drama',
        10751: 'Family',
        14: 'Fantasy',
        36: 'History',
        27: 'Horror',
        10402: 'Music',
        9648: 'Mystery',
        10749: 'Romance',
        878: 'Science Fiction',
        10770: 'TV Movie',
        53: 'Thriller',
        10752: 'War',
        37: 'Western',
    }
    
    const objGenreId = Object.keys(genreNames)

    const movieCards = trendingMovies.map(movieData => {
        let movieGenreId = movieData.genre_ids.join(" ").split(" ").slice(0, 3)

        const genre = movieGenreId.map(movieGenre => {
            if(objGenreId.includes(movieGenre)) {
                return (
                    <p>{genreNames[movieGenre]}</p>
                )
            } 
        })
        
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
                genre = {genre}
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


    
