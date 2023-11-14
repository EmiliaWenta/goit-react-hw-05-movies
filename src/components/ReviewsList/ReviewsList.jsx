import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewsList.module.css';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const ReviewsList = props => {
  const { reviews } = props;
  if (reviews.length === 0) {
    Notify.info("We don't have any reviews for this movie");
    return;
  }

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
