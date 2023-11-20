import React from 'react';
import PropTypes from 'prop-types';

import css from './CastList.module.css';
import { Actor } from '../Actor/Actor';

export const CastList = props => {
  const { cast } = props;

  return (
    <div>
      <ul className={css.castList}>
        {cast.map(actor => (
          <Actor
            id={actor.id}
            profile_path={actor.profile_path}
            name={actor.name}
            character={actor.character}
            key={actor.id}
          />
        ))}
      </ul>
    </div>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
};
