import { useEffect, useState } from 'react';

export const useTrendingMovies = () => {
  const [data, setData] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTQxYTQ0MDFjNTE1ODlkYTRhNjFmMzRlYTk5NmFlMCIsInN1YiI6IjY1NGNjOGU4MWFjMjkyN2IzMDJhMjA2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kgWHTYThCosc3qSxommQUlS7Q9e0krenR-_DLcH8tRA',
        },
      };

      //   setIsLoading(true);
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        options
      );

      if (!response.ok) {
        // setIsLoading(false);
        setError(true);
        throw new Error("We're sorry, something went wrong. Plese try again.");
      }
      const data = await response.json();

      setData(data.results);
      //   setIsLoading(false);
    };
    getMovies().catch(err => console.log(err));
  }, []);

  return {
    data,
    error,
  };
};
