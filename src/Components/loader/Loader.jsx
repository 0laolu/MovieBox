import { useState } from "react"
import styles from "./Loader.module.css"

export default function Loader() {
    

    return (
        <div className={styles.spinnerContainer}>
            <div className={styles.loadingSpinner}></div>
        </div>
    )
}