// import Youtube from react-youtube
import ReactPlayer from "react-player"
import styles from "./MoviePage.module.css"
import starIcon from "../../assets/Star.png"

export default function MoviePageBody(props) {
    const pathName = window.location.pathname
    const pathId = pathName.slice(8, )

    return(
        <section className={styles.pageBodyContainer}>
            <div className={styles.pageBodyContent}>
                <figure className={styles.movieThumbnail}>
                    {/* <a href={`https://www.youtube.com/embed/${props.trailer}`} rel="noreferrer"> */}
                        {/*  */}
                        {
                            props.trailer ?
                                (
                                    <ReactPlayer
                                        url={`https://www.youtube.com/watch?v=${props.trailer}`}
                                        width="100%"
                                        // height="auto"
                                        controls
                                        config={{ youtube: { playerVars: { modestbranding: 1 } } }}
                                    />
                                ) 
                            :
                                (
                                    <img src={props.coverImage} alt=""/>
                                )
                        }
                        
                    {/* </a> */}
                    
                    
                </figure>

                <div className={styles.moviepageBody}>
                    {/* About movie */}
                    <div className={styles.aboutMovieContainer}>
                        <div className={styles.aboutMovie}>
                            <div className={styles.movieTitleContainer}>
                                <h3 className={styles.movieTitle} data-testid="movie-title">{props.title}</h3>
                                <span>•</span>
                                <h3 className={styles.movieReleaseDate} data-testid="movie-release-date"> {props.releaseDate} </h3>
                                <span>•</span>
                                <h3 className={styles.movieRuntime} data-testid="movie-runtime">{`${props.runtime} mins`}</h3>
                            </div>
                            <div className={styles.movieGenre}>
                                {props.genre}
                            </div>
                        </div>
                        <div className={styles.movieVotes}>
                            <img src={starIcon} alt="" />
                            <p className={styles.voteAverage}>{props.voteAverage}</p>
                            <span>|</span>
                            <p className={styles.voteCount}>{props.voteCount}</p>
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