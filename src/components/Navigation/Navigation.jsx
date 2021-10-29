import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <Link to="/" exact>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" exact>
          Notes
        </Link>
      )}
    </nav>
  );
};
