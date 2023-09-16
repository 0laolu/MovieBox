import { useEffect, useState } from "react";

import Hero from "../../Components/hero/Hero"
import MainContent from "../../Components/mainContent/MainContent"
import Footer from "../../Components/footer/Footer"

import Loader from "../../Components/loader/Loader";

export default function Home() {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 3500)

    return (
        <div className="main">
             {
                isLoading ? 
                    <Loader />
                :

                    <div>
                        <Hero/>
                        <MainContent />
                        <Footer />
                    </div>
             }
            
        </div>
        
    )
}