import { useEffect, useState } from "react";
import Sidebar from "../moviePage/Sidebar";
import SeriesPageBody from "./SeriesPageBody";
import styles from "./SeriesPage.module.css"
import Loader from "../loader/Loader";

export default function SeriesPage() {
    const [seriesDetails, setSeriesDetails] = useState("")
    const pathName = window.location.pathname
    const pathId = pathName.slice(11, )
    const [trailerUrl, setTrailerUrl] = useState("")
    

    // const [isLoading, setIsLoading] = useState(true)

    // setTimeout(() => {
    //     setIsLoading(false)
    // }, 3600)

    useEffect(() => {

        
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
            }
            };
            
            fetch(`https://api.themoviedb.org/3/tv/${pathId}?&append_to_response=videos`, options)
            .then(response => response.json())
            .then(data => {setSeriesDetails(data); console.log(data)})
            .catch(err => console.error(err));
        
    }, [])

    useEffect(() => {
        // Use the effect to find and set the trailer URL
        if (seriesDetails !== "") {
          const trailer = seriesDetails.videos.results.find(video => {
            return video.type === "Trailer" && video.site === "YouTube";
          });
    
          if (trailer) {
            setTrailerUrl(trailer.key);
          }
        }
      }, [seriesDetails]);

    // const date = new Date(movieDetails.first_air_date)
    // const dateInUTC = date.toUTCString()

    let genre;
    let averageCount = []
    if(seriesDetails !== "") {
        console.log(seriesDetails)
        let genreName = seriesDetails.genres.map(obj => <p>{obj.name}</p>)
        genre = genreName

        let seriesVotes = seriesDetails.vote_average
        averageCount = seriesVotes.toFixed(1)
    }
 
    return(
        <div className={styles.seriesPageContainer}>
            <Sidebar />
            <SeriesPageBody
                key = {seriesDetails.id}
                coverImage = {`https://image.tmdb.org/t/p/original/${seriesDetails.backdrop_path}`}
                title = {seriesDetails.name}
                releaseDate = {seriesDetails.first_air_date}
                runtime = {seriesDetails.episode_run_time}
                overview = {seriesDetails.overview}
                genre = {genre}
                voteAverage = {averageCount}
                voteCount = {seriesDetails.vote_count}
                trailer = {trailerUrl}
            />
        </div>
    )
}