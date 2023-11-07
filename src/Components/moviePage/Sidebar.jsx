import styles from "./MoviePage.module.css"
import logoImage from "../../assets/hero-logo.png"
import homeIcon from "../../assets/Home.png"
import movieProjectorIcon from "../../assets/movie-projector.png"
import tvSeriesIcon from "../../assets/TV.png"
import calendarIcon from "../../assets/Calendar.png"
import logoutIcon from "../../assets/Logout.png"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return(
        <div className={styles.sidebarContainer}>
            {/* <Link to="/">
                <div className={styles.logoContainer}>
                    <figure className={styles.logoImageWrapper}>
                        <img src={logoImage} alt="" />
                    </figure>
                    <h3 className={styles.logoText}>MovieBox</h3>
                </div>
            </Link> */}
            
            <section className={styles.sidebarNavlinks}>
                <ul className={styles.linkContainer}>
                    <li>
                        <figure className={styles.linkContentLogo}>
                            <img src={homeIcon} alt="" />
                        </figure>
                        <span>Home</span>
                    </li>
                    <li>
                        <figure className={styles.linkContentLogo}>
                            <img src={movieProjectorIcon} alt="" />
                        </figure>
                        <span>Movies</span>
                    </li>
                    <li>
                        <figure className={styles.linkContentLogo}>
                            <img src={tvSeriesIcon} alt="" />
                        </figure>
                        <span>TV Series</span>
                    </li>
                    <li>
                        <figure className={styles.linkContentLogo}>
                            <img src={calendarIcon} alt="" />
                        </figure>
                        <span>Upcoming</span>
                    </li>
                </ul>

                <aside className={styles.quizContainer}>
                    <div className={styles.quizDescription}>
                        <span>Play movie quizzes and earn free tickets</span> 
                        <p>50k people are playing now</p>
                        <button className={styles.playBtn}>Start Playing</button>
                    </div>
                </aside>

                <div className={styles.logoutContainer}>
                    <li>
                        <figure className={styles.linkContentLogo}>
                            <img src={logoutIcon} alt="" />
                        </figure>
                        <span>Log out</span>
                    </li>
                </div>
            </section>
        </div>
    )
}