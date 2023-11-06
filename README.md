# MovieBox 

## Objective
> To create a movie discovery web application that allows users to search for movies/ tv-shows, view details about them, watch movie trailer and save their favourite movies while consuming data from the TMDB API.

## Features
#### 1. User Interface
- Create a responsive and visually appealing user interface for the application. 
- A list of the top 10 movies displayed on the homepage
- They should be displayed in a grid layout with their movie posters.
- The Card component should display the movie title and release date.
  - card - `data-testid= "movie-card"`
  - movie poster - `data-testid= "movie-poster"`
  - movie title - `data-testid= "movie-title"`
  - movie release date - `data-testid= "movie-release-date"`
#### 2. Movie Search:
- Implement a search feature that allows users to search for movies by title.
- Display search results, including movie posters, titles, and release dates.
- Show a loading indicator while fetching search results.
#### 3. Movie Details:
Users should see the movie details page when a user goes to the `/movies/:id` route (where `:id` is the imdb_id).
they should see the following:
- title - `data-testid= "movie-title"`
- release date (in UTC) - `data-testid= "movie-release-date"`
- runtime (in minutes) - `data-testid= "movie-runtime"`
- overview - `data-testid= "movie-overview"`

#### 4. Movie Trailer:
Users should be able to watch video trailer of the selected movie/ tv show 
<br />

## API Integration:
Consume the TMDB API to fetch movie data. 
- Use the following API endpoints:
Fetch movie details by ID `https://api.themoviedb.org/3/movie/{movie_id}`

## Tools Used
 **Client:** React, React-router, React-Player 

 **API:** TMDB API

## Live URL
- [MovieBox](https://movieb0x.netlify.app)
