import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewsList.module.css';
import { ReviewItem } from '../ReviewItem/ReviewItem';

export const ReviewsList = props => {
  const { reviews } = props;

  return (
    <ul className={css.reviewsList}>
      {reviews.map(review => (
        <ReviewItem
          key={review.id}
          id={review.id}
          username={review.author_details.username}
          content={review.content}
        />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author_details: PropTypes.shape({
        username: PropTypes.string.isRequired,
      }),
    })
  ),
};
