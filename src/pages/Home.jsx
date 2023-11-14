import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../Api/getTrendingMovies';
import { Link } from 'react-router-dom';

import css from './Home.module.css';

export function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const movies = await getTrendingMovies();
      setMovies([...movies]);
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={css.trendingMovies__title}>Trending Today</h1>
      <ul className={css.trendingMovies__list}>
        {movies?.map(movie => (
          <li className={css.trendingMovies__listItem} key={movie.id}>
            <Link
              state={{ from: '/', id: `${movie.id}` }}
              to={`/movies/${movie.id}`}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
