import { useEffect, useState } from "react";

import Hero from "../../Components/hero/Hero"
import MainContent from "../../Components/mainContent/MainContent"
import Footer from "../../Components/footer/Footer"

import { Rings } from  'react-loader-spinner'

export default function Home() {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3500)
    }, [])

    return (
        <div className="main">

            <div>
                <Hero/>
                <MainContent />
                <Footer />
            </div>
        </div>
        
    )
}