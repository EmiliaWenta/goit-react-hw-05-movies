import axios from 'axios';

const API_KEY = 'b141a4401c51589da4a61f34ea996ae0';

export const getReviews = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/reviews`;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: '1',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const reviews = await data.results;

  return reviews;
};
