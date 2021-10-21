import React from 'react';
import { Link } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <Link to="/" exact>
      Home
    </Link>

    <Link to="/contacts" exact>
      Notes
    </Link>
  </nav>
);
