import React from 'react';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register" exact>
        Sign up
      </Link>
      <Link to="/login" exact>
        Login
      </Link>
    </div>
  );
};
