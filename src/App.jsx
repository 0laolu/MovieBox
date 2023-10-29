import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Movies from "./pages/movie/Movies"
import AllMovies from './pages/allMovies/AllMovies'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<Movies />} />
            <Route path='/all-movies' element={<AllMovies/>}/>
        </Routes>
    )
}

export default App
