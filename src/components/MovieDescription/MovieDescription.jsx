import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieDescription.module.css';

export const MovieDescription = props => {
  const { img, title, score, overview, genres } = props;
  return (
    <div className={css.movieDescription}>
      <img
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt="movie Poster"
        width="300px"
        height="auto"
      ></img>
      <div>
        <h1 className={css.movieDescription__title}>{title}</h1>
        <p>User score: {score} %</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h2>Genres</h2>
        <p> {genres.map(genre => genre.name).join(', ')}</p>
      </div>
    </div>
  );
};

MovieDescription.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
