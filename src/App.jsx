import { useState } from "react";
import './App.css';
import search from './assets/search.svg';
import MovieCard from "./components/MovieCard";

const API_URL = 'https://www.omdbapi.com/?apikey=cf8fc86b';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MoviesHub</h1>

      <div className="search">
        <input type="text" placeholder="Search..." value={searchValue} onChange={(e) => {setSearchValue(e.target.value)}}/>
        <img src={search} alt="search" onClick={() => searchMovies(searchValue)} />
      </div>

      {
        movies.length > 0 ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard movie={movie} key={index}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }
    </div>
  )
}

export default App;
