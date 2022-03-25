import { useState } from 'react';
import { Form, Label, Button, Title, Container } from './LoginView.styled';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <Title>Login page</Title>

      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Your email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Your password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Come in</Button>
      </Form>
    </Container>
  );
};
