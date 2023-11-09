import { useEffect, useState } from 'react';

export const useMovieIdInfo = id => {
  const [data, setData] = useState({});
  //   const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    const getMovieInfo = async () => {
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
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        options
      );

      if (!response.ok) {
        // setIsLoading(false);
        setError(true);
        throw new Error("We're sorry, something went wrong. Plese try again.");
      }
      const responseData = await response.json();

      setData(responseData);
      //   setIsLoading(false);
    };
    getMovieInfo().catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    error,
  };
};
