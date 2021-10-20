import React from 'react';
import { Link } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <Link to="/" exact>
      Главная
    </Link>

    <Link to="/todos" exact>
      Заметки
    </Link>
  </nav>
);
