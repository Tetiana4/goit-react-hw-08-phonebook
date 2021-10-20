import { Switch, Route } from 'react-router-dom';

import { ContactForm } from '../ContactForm';
import { HomeView } from '../../views/HomeView/HomeView';
import { RegisterView } from '../../views/RegisterView/RegisterView';
import { LoginView } from '../../views/LoginView/LoginView';
import { ContactsView } from '../../views/ContactsView';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { AppBar } from '../AppBar/AppBar';
import { Container, Title } from './App.styled';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>

      <Title>Phonebook</Title>
      <ContactForm />

      <Filter />
      <ContactList />
    </Container>
  );
}
