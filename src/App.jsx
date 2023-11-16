import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Movies from "./pages/movie/Movies"
import Series from './pages/series/Series'
import AllMovies from './pages/allMovies/AllMovies'
import AllSeries from './pages/allSeries/AllSeries'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<Movies />} />
            <Route path='/tv-series/:id' element={<Series />} />
            <Route path='/all-movies' element={<AllMovies/>}/>
            <Route path='/all-tv-series' element={<AllSeries/>}/>
        </Routes>
    )
}

export default App
