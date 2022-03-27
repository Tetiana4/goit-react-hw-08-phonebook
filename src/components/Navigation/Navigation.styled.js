import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 700;
  color: #2a363b;
  margin: 0 5px 8px;
  padding: 10px 30px;
  border: none;
  border-radius: 8px;
  background-color: #66ccff;
  &.active {
    color: red;
  }
`;
