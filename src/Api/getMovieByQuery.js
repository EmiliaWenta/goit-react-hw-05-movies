import axios from 'axios';

import { getMovieByQueryURL, searchParamsQuery } from '../consts/theMoviesDB';

export const getMovieByQuery = async query => {
  const URL = getMovieByQueryURL;
  const searchParams = searchParamsQuery(query);

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const movie = await data.results;

  return movie;
};
