import imbdLogo from "../assets/imdb-logo.png"
import tomatoIcon from "../assets/tomato-icon.png"

export default function MovieCard(props) {
    return (
        <div className="movie-card" data-testid="movie-card">
            {/* the series and like button */}
            <figure className="movie-card-image">
                <img src={props.poster} alt="stranger-things" data-testid="movie-poster"/>
            </figure>

            {/* release date */}
            <div className="movie-release-date" data-testid="movie-release-date">
                <p>USA, {props.releaseDate} </p>
            </div>

            {/* movie title */}
            <h3 className="movie-title" data-testid="movie-title">{props.title}</h3>

            {/* movie rating */}
            <div className="movie-rating">
                <div className="people-ratings">
                    <figure className="imdb-logo">
                        <img src={imbdLogo} alt="" />
                    </figure>
                    <p>{props.peopleRating} / 100</p>
                </div>
                <div className="tomato-rating">
                    <figure className="tomato-icon">
                        <img src={tomatoIcon} alt="" />
                    </figure>
                    <p>{props.tomatoRating}%</p>
                </div>
            </div>

            {/* movie genre */}
            <div className="movie-genre">
                <p>{props.genre}</p>
            </div>

        </div>
    )
}