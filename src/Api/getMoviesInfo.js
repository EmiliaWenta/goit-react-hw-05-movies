import axios from 'axios';
import { searchParams, getMoviesInfoURL } from '../consts/theMoviesDB';

export const getMoviesInfo = async id => {
  const URL = getMoviesInfoURL(id);

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;

  return data;
};
