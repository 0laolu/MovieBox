import styles from "../../pages/movie/MoviePage.module.css"

export default function MoviePageBody() {
    return(
        <section className={styles.pageBodyContainer}>
            <div className={styles.pageBodyContent}>
                <figure className={styles.movieThumbnail}>
                    <img src="" alt="" />
                </figure>

                <div className={styles.moviepageBody}>
                    {/* About movie */}
                    <div className={styles.aboutMovie}>
                        <h3 className="movie-title">Top Gun: Maverick</h3>
                        <h3 className="movie-release-date">2022</h3>
                        <h3 className="movie-runtime">130m</h3>
                        <div className={styles.movieGenre}>
                            <span><p>Action</p></span>
                            <span><p>Drama</p></span>
                        </div>
                    </div>

                    {/* Movie Description */}
                    <div className={styles.movieDescription}>
                        After thirty years, Maverick is still pushing the envelope as a top naval aviator,
                        but must confront ghosts of his past when he leads TOP GUN's elite graduates
                        on a mission that demands the ultimate sacrifice from those chosen to fly it.
                    </div>
                </div>
            </div>
        </section>
    )
}