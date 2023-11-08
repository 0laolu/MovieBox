import { Link } from "react-router-dom";
import { useState } from "react";
import MoviePage from "../../Components/moviePage/MoviePage";
import styles from "../../Components/moviePage/MoviePage.module.css"
import logoImage from "../../assets/hero-logo.png"
import Loader from "../../Components/loader/Loader";


export default function Movies() {
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => {
        setIsLoading(false)
    }, 3600)
    return(
        <>
            {
                isLoading ? 
                    <Loader />

                :

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
            }
        </>
    )
}