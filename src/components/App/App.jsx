import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RegisterView } from '../../views/RegisterView';
import { LoginView } from '../../views/LoginView';
import { ContactsView } from '../../views/ContactsView';
import { AppBar } from '../AppBar/AppBar';
import { authOperations, authSelectors } from '../../redux/auth';
import PrivateRoute from '../routes/PrivateRoute';
import PublicRoute from '../routes/PublicRoute';
import { Container } from './App.styled';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Container>
        <AppBar />
        <Switch>
          <PublicRoute exact path="/"></PublicRoute>

          <PublicRoute path="/register" restricted>
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </Container>
    )
  );
}
