import axios from 'axios';
//
import { searchParams, getCastURL } from '../consts/theMoviesDB';

export const getCast = async id => {
  const URL = getCastURL(id);

  const response = await axios.get(`${URL}?${searchParams}`);
  const data = await response.data;
  const cast = data.cast;

  return cast;
};
