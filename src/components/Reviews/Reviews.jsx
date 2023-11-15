import { getReviews } from 'Api/getReviews';
import { useLocation } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

export const Reviews = () => {
  const location = useLocation();
  const [reviews, setReviews] = useState();
  const [movieId] = useState(location.state.id);

  useEffect(() => {
    async function fetchReviews() {
      const reviews = await getReviews(movieId);
      setReviews([...reviews]);
    }

    fetchReviews();
    // eslint-disable-next-line
  }, []);

  return <div>{reviews && <ReviewsList reviews={reviews} />}</div>;
};
