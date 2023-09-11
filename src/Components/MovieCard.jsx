
export default function MovieCard() {
    return (
        <div>
            <div className="movie-card-container">
                {/* the series and like button */}
                <figure className="movie-card-image">
                    <img src="" alt="" />
                </figure>

                {/* release date */}
                <div className="movie-release-date">
                    <p>USA, 2016 <span>- Current</span> </p>
                </div>

                {/* movie title */}
                <h3 className="movie-title">Stranger Things</h3>

                {/* movie rating */}
                <div className="movie-rating">
                    <div className="people-ratings">
                        <figure className="imdb-logo">
                            <img src="" alt="" />
                        </figure>
                        <p>86.0 / 100</p>
                    </div>
                    <div className="tomato-rating">
                        <figure className="tomato-icon">
                            <img src="" alt="" />
                        </figure>
                        <p>97%</p>
                    </div>
                </div>

                {/* movie genre */}
                <div className="movie-genre">
                    <p>Action, Adventure, Horror</p>
                </div>

            </div>
        </div>
    )
}