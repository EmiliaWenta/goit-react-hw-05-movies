import axios from 'axios';

export const getReviews = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const searchParams = new URLSearchParams({
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
    page: '1',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const reviews = await data.results;

  return reviews;
};
