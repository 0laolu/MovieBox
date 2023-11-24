import { useEffect, useState } from "react"
import HeroHeader from "./HeroHeader"
import HeroBody from "./HeroBody"

export default function Hero() {

    const [movieImages, setMovieImages] = useState([])

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
            .then(data => setMovieImages(data.results))
            .catch(err => console.error(err));

            
    }, [])

    console.log(movieImages)

    const image = movieImages.map((movieImage) => {

        // const voteRating = movieImage.vote_average


        return (
            <>
                <HeroBody
                    title = {movieImage.title}
                    peopleRating = {Math.round((movieImage.vote_average / 10) * 100)}
                    tomatoRating = {Math.floor(Math.random() * 26) + 75}
                    description = {movieImage.overview}
                />
                <img src={`https://image.tmdb.org/t/p/original/${movieImage.backdrop_path}`} alt="" />
                <div className="overlay"></div>
            </>
        )
    })

    return (
        <section className="hero-section">
            
            <HeroHeader />
            <div className="image-container">
                <figure className="wrapper">
                    {image}
                    {/* <div className="overlay"></div> */}
                </figure>
            </div>
            
        </section>
    )
}