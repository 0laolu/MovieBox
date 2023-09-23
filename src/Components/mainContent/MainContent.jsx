import MoviesList from "./MoviesList";

export default function MainContent() {
    //  rendering the MainContent on the webpage
    return (
        <section className="main-content-section">
            <div className="about">
                <h2 className="about-header">Trending Movies</h2>
                <a href="https://google.com">See more <span>&gt;</span></a>
            </div>
            {/* displaying the returned mapped data stored in movieCards on the webpage */}
            <div className="main-content-body">
                <div className="movie-card-container">
                    <MoviesList />
                </div>
            </div>
        </section>
    )
}