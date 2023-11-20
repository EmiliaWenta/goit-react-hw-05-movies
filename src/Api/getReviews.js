import axios from 'axios';

import { getReviewsURL, searchParamsPage } from '../consts/theMoviesDB';

export const getReviews = async id => {
  const URL = getReviewsURL(id);

  const response = await axios.get(`${URL}?${searchParamsPage}`);
  const data = await response.data;
  const reviews = await data.results;

  return reviews;
};
