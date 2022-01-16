import styled from '@emotion/styled';

export const Title = styled.p`
  margin-right: 15px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.04em;

  color: #52555f;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const Span = styled.span`
  display: block;
  margin-top: 5px;
  color: #407946;

  @media screen and (min-width: 768px) {
    display: inline;
    margin-left: 15px;
    margin-top: 0;
  }
`;

export const Line = styled.div`
  margin-right: 10px;
  height: 71px;
  border-left: 1px solid #e0e5eb;

  @media screen and (min-width: 768px) {
    height: 36px;
    margin-right: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  color: red;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 30px 0 40px;
  height: 85px;

  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 50px;
    border-radius: 30px;
    margin-bottom: 30px;
  }
`;
