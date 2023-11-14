import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from './ButtonGoBack.module.css';

export const ButtonGoBack = props => {
  const { locationforButton } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(locationforButton);
  };
  return (
    <button className={css.buttonGoBack} onClick={handleClick}>
      Go back
    </button>
  );
};
