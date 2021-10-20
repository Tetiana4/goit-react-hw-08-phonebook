import React from 'react';
import { Container, Title } from './HomeView.styled';

export const HomeView = () => (
  <Container>
    <Title>
      Wellcome to our page
      <span role="img" aria-label="Иконка приветствия">
        💁‍♀️
      </span>
    </Title>
  </Container>
);