import axios from 'axios';

export const getCast = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}/credits`;
  const searchParams = new URLSearchParams({
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const cast = data.cast;

  return cast;
};
