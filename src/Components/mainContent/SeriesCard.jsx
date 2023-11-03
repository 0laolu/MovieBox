import imbdLogo from "../../assets/imdb-logo.png"
import tomatoIcon from "../../assets/tomato-icon.png"
import favorite from "../../assets/Favorite.png"
import favoriteRed from "../../assets/Favorite-red.png"

import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function SeriesCard(props) {
    const navigate = useNavigate()
    const [isFavorite, setIsFavorite] = useState(false)

    return (
        <div className="series-card" data-testid="series-card">
            {/* the series and like button */}
            <figure className="series-card-image">
                <img onClick={() => {navigate(`/tv-series/${props.id}`)}} src={props.poster} alt="" data-testid="series-poster"/>
                <span className="favorite-btn">
                    <img onClick={() => setIsFavorite(prevFavorite => !prevFavorite)}  src={isFavorite ? favoriteRed : favorite} alt="" />
                </span>
            </figure>

            <div className="card-body">
                {/* release date */}
                <div className="series-release-date">
                    <p data-testid="series-release-date"> {props.releaseDate} </p>
                </div>

                {/* movie title */}
                <h3 onClick={() => {navigate(`/tv-series/${props.id}`)}} className="series-title" data-testid="series-title">{props.title}</h3>

                {/* movie rating */}
                <div className="series-rating">
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
                <div className="series-genre">
                    {props.genre}
                </div>
            </div>

        </div>
    )
}