import React from 'react';
import PropTypes from 'prop-types';
import css from './Actor.module.css';

export const Actor = props => {
  const { id, profile_path, name, character } = props;
  return (
    <>
      <li className={css.actor} key={id}>
        <img
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt={name}
          width="260px"
        ></img>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </li>
    </>
  );
};

Actor.propTypes = {
  id: PropTypes.number.isRequired,
  profile_path: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
