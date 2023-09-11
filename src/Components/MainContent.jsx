import MovieCard from "./MovieCard"

// importing a local api moviedata
import MovieData from "../moviedata"

export default function MainContent() {
    // mapping over the array of objects and setting props to the object properties
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