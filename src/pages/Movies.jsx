import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getMovieByQuery } from '../Api/getMovieByQuery';
import { useSearchParams } from 'react-router-dom';

import css from './Movies.module.css';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movieQuery, setMovieQuery] = useSearchParams();
  const location = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const query = form.elements.query.value;
    setMovieQuery({ movieQuery: query });

    form.reset();
  }

  useEffect(() => {
    async function fetchMovies() {
      const query = movieQuery.get('movieQuery');

      if (!query) {
        return;
      }

      const movies = await getMovieByQuery(query);
      setMovies([...movies]);
    }
    fetchMovies();
  }, [movieQuery]);

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="query"
          className={css.form__input}
          placeholder="Please enter the title of the movie"
        />
        <button type="sumbit" className={css.form__button}>
          Search
        </button>
      </form>
      <ul className={css.movieList}>
        {movies?.map(movie => (
          <li className={css.movieList__Item} key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location, id: `${movie.id}` }}
              className={css.movieList__link}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
