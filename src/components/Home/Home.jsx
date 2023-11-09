import { useTrendingMovies } from '../../hooks/useTrendingMovies';
import { Link } from 'react-router-dom';

import css from './Home.module.css';

export function Home() {
  const movies = useTrendingMovies();

  return (
    <div>
      <h1 className={css.trendingMovies__title}>Trending Today</h1>

      <ul className={css.trendingMovies__list}>
        {movies?.data?.map(movie => (
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
