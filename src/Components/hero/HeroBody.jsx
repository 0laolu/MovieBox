import imbdLogo from "../../assets/imdb-logo.png"
import tomatoIcon from "../../assets/tomato-icon.png"
import playButton from "../../assets/Play.png"
import dashDesign from "../../assets/dash-design.png"


export default function HeroBody() {
    return (
        <div className="hero-body">
            <div className="hero-content">
                <h2 className="hero-content__header">John Wick 3 : Parabellum</h2>
                {/* content rating */}
                <div className="hero-content__rating">
                    <div className="people-ratings">
                        <figure className="imdb-logo">
                            <img src={imbdLogo} alt="" />
                        </figure>
                        <p>86.0 / 100</p>
                    </div>
                    <div className="tomato-rating">
                        <figure className="tomato-icon">
                            <img src={tomatoIcon} alt="" />
                        </figure>
                        <p>97%</p>
                    </div>
                </div>

                {/* content description */}
                <div className="hero-content__description">
                    <p>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
                </div>

                {/* movie trailer button */}
                <div className="trailer-btn-container">
                    <button className="trailer-btn">
                        <div className="trailer-btn-content">
                            <img src={playButton} alt="" />
                            <span>WATCH TRAILER</span>
                        </div>
                    </button>
                </div>
            </div>

            <div className="movie-number">
                <p>1</p>
                <p>2</p>
                <p className="three"><span><img src={dashDesign} alt="" /></span>3</p>
                <p>4</p>
                <p>5</p>
            </div>
        </div>
    )
}