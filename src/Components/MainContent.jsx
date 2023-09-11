import MovieCard from "./MovieCard"
import MovieData from "../moviedata"

export default function MainContent() {
    const movieCards = MovieData.map(movie => {
        return (
            <MovieCard
                key = {movie.id}
                poster = {movie.poster}
                releaseDate = {movie.releaseDate}
                title = {movie.title}
                peopleRating = {movie.rating.peopleRating}
                tomatoRating = {movie.rating.tomatoRating}
                genre = {movie.genre}
            />
        )
    })

    return (
        <section className="main-content-section">
            <div className="about">
                <h2 className="about-header">Featured Movie</h2>
                <a href="https://google.com">See more <span>&gt;</span></a>
            </div>
            <div className="movie-card-container">
                {movieCards}
            </div>
        </section>
    )

    
}