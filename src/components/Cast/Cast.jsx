import { useLocation } from 'react-router-dom';
import { getCast } from '../../Api/getCast';
import React, { useEffect, useState } from 'react';
import { CastList } from '../CastList/CastList';

const Cast = () => {
  const location = useLocation();
  const [cast, setCast] = useState([]);
  const [movieId] = useState(location.state.id);

  useEffect(() => {
    async function fetchMovieCast() {
      const cast = await getCast(movieId);
      setCast([...cast]);
    }

    fetchMovieCast();
    // eslint-disable-next-line
  }, []);

  return <div>{cast && <CastList cast={cast} />}</div>;
};

export default Cast;
