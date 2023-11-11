// import Youtube from react-youtube
import ReactPlayer from "react-player"
import styles from "./SeriesPage.module.css"
import starIcon from "../../assets/Star.png"

export default function SeriesPageBody(props) {
    const pathName = window.location.pathname
    const pathId = pathName.slice(8, )

    return(
        <section className={styles.pageBodyContainer}>
            <div className={styles.pageBodyContent}>
                <figure className={styles.seriesThumbnail}>
                    {/* <a href={`https://www.youtube.com/embed/${prop}`} rel="noreferrer"> */}
                        {/* <img src={props.coverImage} alt=""/> */}
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${props.trailer}`}
                            width="100%"
                            height="auto"
                            controls
                            config={{ youtube: { playerVars: { modestbranding: 1 } } }}
                            onClick={() => window.location.href = `https://www.youtube.com/embed/${props.trailer}`}
                            onTouchStart={() => window.location.href = `https://www.youtube.com/embed/${props.trailer}`}
                            onKeyPress={() => window.location.href = `https://www.youtube.com/embed/${props.trailer}`}
                            className={styles.moviePlayer}
                        />

                    {/* </a> */}
                    
                    
                </figure>

                <div className={styles.seriespageBody}>
                    {/* About series */}
                    <div className={styles.aboutSeriesContainer}>
                        <div className={styles.aboutSeries}>
                            <div className={styles.seriesTitleContainer}>
                                <h3 className={styles.seriesTitle} data-testid="series-title">{props.title}</h3>
                                <span>•</span>
                                <h3 className={styles.seriesReleaseDate} data-testid="series-release-date"> {props.releaseDate} </h3>
                                <span>•</span>
                                <h3 className={styles.seriesRuntime} data-testid="series-runtime">{`${props.runtime} mins`}</h3>
                            </div>
                            <div className={styles.seriesGenre}>
                                {props.genre}
                            </div>
                        </div>
                        <div className={styles.seriesVotes}>
                            <img src={starIcon} alt="" />
                            <p className={styles.voteAverage}>{props.voteAverage}</p>
                            <span>|</span>
                            <p className={styles.voteCount}>{props.voteCount}</p>
                        </div>
                    </div>

                    {/* Movie Description */}
                    <div className={styles.seriesDescription}>
                        <p data-testid="series-overview">{props.overview}</p>
                    </div>


                </div>
            </div>
        </section>
    )
}