import { useNavigate } from "react-router-dom"
import imbdLogo from "../../assets/imdb-logo.png"
import tomatoIcon from "../../assets/tomato-icon.png"
import playButton from "../../assets/Play.png"
import dashDesign from "../../assets/dash-design.png"


export default function HeroBody(props) {

    const navigate = useNavigate()

    return (
        <div className="hero-body">
            <div className="hero-content">
                <h2 className="hero-content__header">{props.title}</h2>
                {/* content rating */}
                <div className="hero-content__rating">
                    <div className="people-ratings">
                        <figure className="imdb-logo">
                            <img src={imbdLogo} alt="" />
                        </figure>
                        <p> {props.peopleRating} / 100</p>
                    </div>
                    <div className="tomato-rating">
                        <figure className="tomato-icon">
                            <img src={tomatoIcon} alt="" />
                        </figure>
                        <p> {props.tomatoRating}% </p>
                    </div>
                </div>

                {/* content description */}
                <div className="hero-content__description">
                    <p> {props.description} </p>
                </div>

                {/* movie trailer button */}
                <div className="trailer-btn-container">
                    <button className="trailer-btn">
                        <div className="trailer-btn-content">
                            <img src={playButton} alt="" />
                            <span onClick={() => {navigate(`/movies/${props.id}`)}}>WATCH TRAILER</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}