import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useMovieIdInfo } from 'hooks/useMovieIdInfo';

export const MovieDetails = () => {
  const location = useLocation();
  const id = location.state.id;
  const movieInfoId = useMovieIdInfo(id);
  console.log(movieInfoId.data);

  return (
    <div>
      moviedetails
      <img src={movieInfoId.data.poster_path} alt="movie Poster"></img>
      <h1>{movieInfoId.data.title}</h1>
      <p>User score: {movieInfoId.data.vote_count}%</p>
      <h2>Overview</h2>
      <p>{movieInfoId.data.overview}</p>
      <h2>Genres</h2>
      <p>{movieInfoId.data.genres.map(item => item.name).join(', ')}</p>
      <Outlet />
    </div>
  );
};
