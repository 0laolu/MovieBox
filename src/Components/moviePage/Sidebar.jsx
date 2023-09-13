import styles from "../../pages/movie/MoviePage.module.css"
import logoImage from "../../assets/hero-logo.png"

export default function Sidebar() {
    return(
        <div>
            <div className="logo-container">
                <figure className="logo-image">
                    <img src={logoImage} alt="" />
                </figure>
                <h3 className={styles.logoText}>MovieBox</h3>
            </div>
            <h1>This is the Sidebar Component</h1>
        </div>
    )
}