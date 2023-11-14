import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewItem.module.css';

export const ReviewItem = props => {
  const { id, username, content } = props;
  return (
    <li className={css.reviewItem} key={id}>
      <h4>{username}</h4>
      <p>{content}</p>
    </li>
  );
};

ReviewItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};
