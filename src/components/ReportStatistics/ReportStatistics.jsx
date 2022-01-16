import React from 'react';

import { Container, Title, Span, Line } from './ReportStatistics.styled';

const ReportStatistic = ({ costs, income }) => {
  let totalCosts = 0;
  let totalIncome = 0;

  if (costs) {
    const sum = costs.reduce((acc, amount) => {
      return acc + amount.total;
    }, 0);
    // totalCosts = sum.toLocaleString();
    totalCosts = sum;
  }

  if (income) {
    const sum = income.reduce((acc, amount) => {
      return acc + amount.total;
    }, 0);
    totalIncome = sum;
    // totalIncome = sum.toLocaleString();
  }

  return (
    <Container>
      <Title>Costs:{<Span>- {totalCosts} UAN</Span>} </Title>
      <Line />
      <Title>Income:{<Span>+ {totalIncome} UAN</Span>} </Title>
    </Container>
  );
};

export default ReportStatistic;
