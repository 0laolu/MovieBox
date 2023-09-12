import MovieCard from "./MovieCard"

import { useEffect, useState } from "react"

export default function MainContent() {

    const [topRatedMovies, setTopRatedMovies] = useState([])

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
            .then(data => setTopRatedMovies(data.results.slice(0, 10)))
            .catch(err => console.error(err));
    }, [])

    const movieCards = topRatedMovies.map(movieData => {
        console.log(movieData)
        return (
            <MovieCard 
                key = {movieData.id}
                poster = {`https://image.tmdb.org/t/p/w185/${movieData.poster_path}`}
                title ={movieData.title}
                releaseDate = {movieData.release_date}
            />
        )
    })


    // rendering the MainContent on the webpage
    return (
        <section className="main-content-section">
            <div className="about">
                <h2 className="about-header">Featured Movie</h2>
                <a href="https://google.com">See more <span>&gt;</span></a>
            </div>
            {/* displaying the returned mapped data stored in movieCards on the webpage */}
            <div className="movie-card-container">
                {movieCards}
            </div>
        </section>
    )

    
}