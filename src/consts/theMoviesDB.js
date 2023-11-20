export const searchParams = new URLSearchParams({
  api_key: process.env.REACT_APP_API_KEY,
  language: 'en-US',
});

export const searchParamsQuery = query => {
  return new URLSearchParams({
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
    query: `${query}`,
  });
};

export const searchParamsPage = new URLSearchParams({
  api_key: process.env.REACT_APP_API_KEY,
  language: 'en-US',
  page: 1,
});

export const getTrendingMoviesURL =
  'https://api.themoviedb.org/3/trending/movie/day';

export const getCastURL = id => {
  return `https://api.themoviedb.org/3/movie/${id}/credits`;
};

export const getReviewsURL = id => {
  return `https://api.themoviedb.org/3/movie/${id}/reviews`;
};

export const getMovieByQueryURL = `https://api.themoviedb.org/3/search/movie`;

export const getMoviesInfoURL = id => {
  return `https://api.themoviedb.org/3/movie/${id}`;
};
