import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 10px 20px;
  font-weight: 700;
  margin: 10px 5px;
  border-radius: 10px;
  background: #66ccff;
  color: #2a363b;
  &.active {
    color: #e84a5f;
  }
`;
