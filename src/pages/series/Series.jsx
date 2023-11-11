import { Link } from "react-router-dom"
import SeriesPage from "../../Components/seriesPage/SeriesPage"
import logoImage from "../../assets/hero-logo.png"
import Loader from "../../Components/loader/Loader"
import { useEffect, useState } from "react"
import styles from "../../Components/seriesPage/SeriesPage.module.css"

export default function Series() {

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
                    <div>
                        <Link to="/">
                            <div className={styles.logoContainer}>
                                <figure className={styles.logoImageWrapper}>
                                    <img src={logoImage} alt="" />
                                </figure>
                                <h3 className={styles.logoText}>MovieBox</h3>
                            </div>
                        </Link>
                    <SeriesPage />
                    </div>
            }
        </>
    )
}