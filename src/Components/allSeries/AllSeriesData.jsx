import AllSeriesCard from "./AllSeriesCard";
import { useEffect, useState } from "react"



export default function AllSeriesData() {

    const [trendingMovies, setTrendingMovies] = useState([])
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
            }
          };
          
          fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', options)
            .then(response => response.json())
            .then(data => setTrendingMovies(data.results))
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
        10759: 'Action & Adventure',
        10762: 'Kids',
        10763: 'News',
        10764: 'Reality',
        10765: 'Sci-fi & Fantasy',
        10766: 'Soap',
        10767: 'Talk',
        10768: 'War & Politics',
    }
    
    const objGenreId = Object.keys(genreNames)

    const seriesCards = trendingMovies.map(seriesData => {
        // console.log(seriesData.id)
        let seriesGenreId = seriesData.genre_ids.join(" ").split(" ").slice(0, 2)

        const genre = seriesGenreId.map(seriesGenre => {
            if(objGenreId.includes(seriesGenre)) {
                return (
                    <p>{genreNames[seriesGenre]}</p>
                )
            } 
        })
        
        const voteRating = seriesData.vote_average
        const rating = Math.round((voteRating / 10) * 100)
        
        const tomatoRate = Math.floor(Math.random() * 26) + 75

        return (
            <AllSeriesCard
                key = {seriesData.id}
                poster = {`https://image.tmdb.org/t/p/original/${seriesData.poster_path}`}
                title ={seriesData.name}
                releaseDate = {seriesData.first_air_date}
                id={seriesData.id}
                peopleRating = {rating}
                tomatoRating = {tomatoRate}
                genre = {genre}
            />
        )
    })


    // rendering the MainContent on the webpage
    return (
        <>
            {seriesCards}
        </>
    )
}


    
