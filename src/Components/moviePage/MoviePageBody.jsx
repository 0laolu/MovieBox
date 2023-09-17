import styles from "../../pages/movie/MoviePage.module.css"

export default function MoviePageBody(props) {
    return(
        <section className={styles.pageBodyContainer}>
            <div className={styles.pageBodyContent}>
                <figure className={styles.movieThumbnail}>
                    <img src={props.coverImage} alt=""/>
                </figure>

                <div className={styles.moviepageBody}>
                    {/* About movie */}
                    <div className={styles.aboutMovieContainer}>
                        <div className={styles.aboutMovie}>
                            <h3 className={styles.movieTitle} data-testid="movie-title">{props.title}</h3>
                            <h3 className={styles.movieReleaseDate} data-testid="movie-release-date"> {props.releaseDate} </h3>
                            <h3 className={styles.movieRuntime} data-testid="movie-runtime">{`${props.runtime} mins`}</h3>
                            <div className={styles.movieGenre}>
                                <p className={styles.genre}>{props.genre}</p>
                            </div>
                        </div>
                    </div>

                    {/* Movie Description */}
                    <div className={styles.movieDescription}>
                        <p data-testid="movie-overview">{props.overview}</p>
                    </div>


                </div>
            </div>
        </section>
    )
}