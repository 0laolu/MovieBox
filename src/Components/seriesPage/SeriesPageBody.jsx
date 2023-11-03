// import Youtube from react-youtube
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
                        <img src={props.coverImage} alt=""/>
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