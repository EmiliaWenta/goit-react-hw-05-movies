import { Link, useLocation, Outlet } from 'react-router-dom';
import { getMoviesInfo } from '../../Api/getMoviesInfo';
import React, { useEffect, useState } from 'react';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const location = useLocation();
  const [movieDetails, setmovieDetails] = useState(null);
  const [movieId] = useState(location.state.movieId);

  useEffect(() => {
    const id = location.state.id;
    async function fetchMoviesDetails() {
      const movieInfo = await getMoviesInfo(id);
      setmovieDetails({ ...movieInfo });
    }

    fetchMoviesDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {movieDetails && (
        <MovieDescription
          img={movieDetails.poster_path}
          title={movieDetails.title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
        />
      )}
      <div className={css.additionalInformation}>
        <h2>Additional Information</h2>
        <ul className={css.additionalInformation__list}>
          <li>
            <Link
              className={css.additionalInformation__link}
              to="cast"
              state={{ movieId: movieId }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={css.additionalInformation__link}
              to="reviews"
              state={{ movieId: movieId }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
