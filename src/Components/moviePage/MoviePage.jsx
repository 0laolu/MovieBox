import Sidebar from "./Sidebar";
import MoviePageBody from "./MoviePageBody";
import styles from "../../pages/movie/MoviePage.module.css"

export default function MoviePage() {
    return(
        <div className={styles.moviePageContainer}>
            <Sidebar />
            <MoviePageBody />
        </div>
    )
}