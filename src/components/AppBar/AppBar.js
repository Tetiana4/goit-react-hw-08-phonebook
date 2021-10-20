// import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  //   const isLoggedIn = useSelector();
  return (
    <Header>
      <Navigation />
      <UserMenu /> <AuthNav />
    </Header>
  );
};
// authSelectors.getIsLoggedIn;
