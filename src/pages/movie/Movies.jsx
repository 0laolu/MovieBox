import { Link } from "react-router-dom";
import MoviePage from "../../Components/moviePage/MoviePage";
import styles from "../../Components/moviePage/MoviePage.module.css"
import logoImage from "../../assets/hero-logo.png"
export default function Movies() {
    return(
        <div>
            <Link to="/">
                <div className={styles.logoContainer}>
                    <figure className={styles.logoImageWrapper}>
                        <img src={logoImage} alt="" />
                    </figure>
                    <h3 className={styles.logoText}>MovieBox</h3>
                </div>
            </Link>
            <MoviePage />
        </div>
    )
}