import { useEffect, useState } from "react"
import HeroHeader from "./HeroHeader"
import HeroBody from "./HeroBody"

export default function Hero() {

    const [movieImages, setMovieImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [currentSlideContent, setCurrentSlideContent] = useState(0)

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % movieImages.length);
        }, 8200); // Adjust timing as needed for slide change
        return () => clearInterval(interval);
    }, [movieImages.length])

    const currentMovie = movieImages[currentSlide]

    const percent = `${currentSlide * -100}%`


    
    return (
        <section className="hero-section">
            <HeroHeader />
            <div className="image-container">
                <figure 
                    className="wrapper" 
                    style={{
                        transform: `translateX(${percent})`,
                        transition: "all 0.7s ease-in-out"
                    }}
                >
                    {movieImages.map((movieImage, index) => (
                        <div 
                            key={movieImage.id}
                            className="slide"
                        >
                            <img 
                                src={`https://image.tmdb.org/t/p/original/${movieImage.backdrop_path}`} 
                                alt={movieImage.title}
                            />
                            <div className="overlay"></div>
                        </div>
                    ))}
                </figure>

                

                {movieImages[currentSlide] && (
                    <HeroBody 
                        title={movieImages[currentSlide].title}
                        peopleRating={Math.round((movieImages[currentSlide].vote_average / 10) * 100)}
                        tomatoRating={Math.floor(Math.random() * 26) + 75}
                        description={movieImages[currentSlide].overview}
                    />
                )}
            </div>
        </section>
    )
}