import { useNavigate } from "react-router-dom";
import MoviesList from "./MoviesList";

export default function MainContent() {
    const navigate = useNavigate()
    //  rendering the MainContent on the webpage
    return (
        <section className="main-content-section">
            <div className="about">
                <h2 className="about-header">Trending Movies</h2>
                <p onClick={() => navigate(`/all-movies`)}>See more <span>&gt;</span></p>
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