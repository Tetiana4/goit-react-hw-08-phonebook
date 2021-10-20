import React from 'react';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/register" exact>
        Регистрация
      </Link>
      <Link to="/login" exact>
        Логин
      </Link>
    </div>
  );
};
