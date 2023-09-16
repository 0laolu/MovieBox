import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MoviePageBody from "./MoviePageBody";
import styles from "../../pages/movie/MoviePage.module.css"
import Loader from "../loader/Loader";

export default function MoviePage() {
    const [movieDetails, setMovieDetails] = useState("")
    const pathName = window.location.pathname
    const pathId = pathName.substring(11, )

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
                            releaseDate = {dateInUTC}
                            runtime = {movieDetails.runtime}
                            overview = {movieDetails.overview}
                            
                        />
                    </div>
            }
        </div>
    )
}