import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MoviePageBody from "./MoviePageBody";
import styles from "./MoviePage.module.css"
import Loader from "../loader/Loader";

export default function MoviePage() {
    const [movieDetails, setMovieDetails] = useState("")
    const pathName = window.location.pathname
    const pathId = pathName.slice(8, )

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 3600)

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${pathId}?language=en-US`, options)
            .then(response => response.json())
            .then(data => setMovieDetails(data))
            .catch(err => console.error(err));
        
    }, [])

    const date = new Date(movieDetails.release_date)
    const dateInUTC = date.toUTCString()

    let genre;
    let averageCount = []
    if(movieDetails !== "") {
        let genreName = movieDetails.genres.map(obj => <p>{obj.name}</p>)
        genre = genreName

        let movieVotes = movieDetails.vote_average
        averageCount = movieVotes.toFixed(1)
    }
 
    return(
        <div>
            {
                isLoading ? 
                    <Loader />
                
                :


                    <div className={styles.moviePageContainer}>
                        <Sidebar />
                        <MoviePageBody
                            key = {movieDetails.id}
                            coverImage = {`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}`}
                            title = {movieDetails.title}
                            releaseDate = {dateInUTC.slice(4, 16)}
                            runtime = {movieDetails.runtime}
                            overview = {movieDetails.overview}
                            genre = {genre}
                            voteAverage = {averageCount}
                            voteCount = {movieDetails.vote_count}
                        />
                    </div>
            }
        </div>
    )
}