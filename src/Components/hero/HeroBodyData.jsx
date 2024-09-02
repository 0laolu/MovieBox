// import { useEffect, useState } from "react";
// import HeroBody from "./HeroBody";

// export default function HeroBodyData() {
//     const [movieInfo, setMovieInfo] = useState([])

//     useEffect(() => {
//         const options = {
//             method: 'GET',
//             headers: {
//               accept: 'application/json',
//               Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`
//             }
//           };
          
//           fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//             .then(response => response.json())
//             .then(data => setMovieInfo(data.results))
//             .catch(err => console.error(err));

            
//     }, [])

//     const details = movieInfo.map(movieDetail => {
//         return (
//             <HeroBody
//                 title = {movieDetail.title}
//                 peopleRating = {Math.round((movieDetail.vote_average / 10) * 100)}
//                 tomatoRating = {Math.floor(Math.random() * 26) + 75}
//                 description = {movieDetail.overview}
//             /> 
//         )
//     })

//     return(
//         <div className="content">
//             {details}
//         </div>
//     )
// }