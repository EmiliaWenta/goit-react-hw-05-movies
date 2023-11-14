import axios from 'axios';

const API_KEY = 'b141a4401c51589da4a61f34ea996ae0';

export const getMoviesInfo = async id => {
  const URL = `https://api.themoviedb.org/3/movie/${id}`;
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  console.log(data);

  return data;
};
