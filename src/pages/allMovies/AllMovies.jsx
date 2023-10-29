import { useState } from "react"
import Loader from "../../Components/loader/Loader"

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
                    <div>
                        this is the all movies page
                    </div>
            }
        </>
    )
}