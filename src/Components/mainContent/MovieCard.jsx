import imbdLogo from "../../assets/imdb-logo.png"
import tomatoIcon from "../../assets/tomato-icon.png"
import favorite from "../../assets/Favorite.png"
import favoriteRed from "../../assets/Favorite-red.png"

import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function MovieCard(props) {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="movie-card" data-testid="movie-card">
            {/* the series and like button */}
            <figure className="movie-card-image">
                <img src={props.poster} alt="" data-testid="movie-poster"/>
                <span className="favorite-btn">
                    <img onClick={() => setIsFavorite(prevFavorite => !prevFavorite)}  src={isFavorite ? favoriteRed : favorite} alt="" />
                </span>
            </figure>

            <div onClick={() => {navigate(`/movies/${props.id}`)}} className="card-body">
                {/* release date */}
                <div className="movie-release-date">
                    <p data-testid="movie-release-date"> {props.releaseDate} </p>
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
                    {props.genre}
                </div>
            </div>

        </div>
    )
}