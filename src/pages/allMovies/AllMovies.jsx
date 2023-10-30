import { useState } from "react"
import Loader from "../../Components/loader/Loader"
import AllMoviesData from "../../Components/allMovies/AllMoviesData"
import styles from "../../Components/allMovies/AllMovies.module.css"

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
                        <div className={styles.movieCardContainer}>
                            <AllMoviesData/>
                        </div>
                    </section>
            }
        </>
    )
}