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

    const image = movieImages.map(movieImage => {
        return (
            <img src={`https://image.tmdb.org/t/p/original/${movieImage.backdrop_path}`} alt="" />
        )
        // console.log(movieImage)
        // https://image.tmdb.org/t/p/original/${movieData.poster_path}
    })

    return (
        <section className="hero-section">
            <div className="image-container">
                <figure className="wrapper">
                    {image}
                </figure>
            </div>
            <HeroHeader />
            <HeroBody />
        </section>
    )
}