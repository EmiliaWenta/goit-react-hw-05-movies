import { Link, useLocation, Outlet } from 'react-router-dom';
import { getMoviesInfo } from '../../Api/getMoviesInfo';
import React, { useEffect, useState, Suspense } from 'react';
import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { ButtonGoBack } from 'components/ButtonGoBack/ButtonGoBack';
import Loader from '../Loader/Loader';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const location = useLocation();
  const [movieDetails, setmovieDetails] = useState(null);
  const [movieId] = useState(location.state.id);
  const [locationforButton, setlocationforButton] = useState();

  useEffect(() => {
    async function fetchMoviesDetails() {
      const movieInfo = await getMoviesInfo(movieId);
      setmovieDetails({ ...movieInfo });
      setlocationforButton(location.state.from);
    }

    fetchMoviesDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ButtonGoBack locationforButton={locationforButton} />
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
              state={{ id: movieId }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              className={css.additionalInformation__link}
              to="reviews"
              state={{ id: movieId }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
