import { useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../../Components/loader/Loader"
import AllMoviesData from "../../Components/allMovies/AllMoviesData"
import styles from "../../Components/allMovies/AllMovies.module.css"
import logoImage from "../../assets/hero-logo.png"

export default function AllMovies() {

    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 3600)

    return (
        <>
            {
                isLoading ? 
                    <Loader />
                :
                    <section className={styles.moviesContentSection}>
                        <Link to="/">
                            <div className={styles.logoContainer}>
                                <figure className={styles.logoImageWrapper}>
                                    <img src={logoImage} alt="" />
                                </figure>
                                <h3 className={styles.logoText}>MovieBox</h3>
                            </div>
                        </Link>
                        <div className={styles.movieCardContainer}>
                            <AllMoviesData/>
                        </div>
                    </section>
            }
        </>
    )
}