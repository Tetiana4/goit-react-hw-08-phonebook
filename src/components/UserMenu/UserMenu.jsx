import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import { Button } from '../UserMenu/UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <div>
      <span>Welcome, {name}</span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Go out
      </Button>
    </div>
  );
};
