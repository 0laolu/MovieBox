import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import Movies from "./pages/movie/Movies"

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies/:id' element={<Movies />} />
        </Routes>
    )
}

export default App
