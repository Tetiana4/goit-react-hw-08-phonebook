import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 101;
  backdrop-filter: blur(5px);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: 380px;
  height: 194px;

  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
`;

export const Title = styled.h2`
  padding: 0 0 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16, 41px;
  font-family: Roboto;
  letter-spacing: 0.02em;

  color: #52555f;
`;

export const Button = styled.button`
  margin: 0 7.5px;
  width: 125px;
  height: 44px;

  font-weight: 700;
  text-transform: uppercase;
  border-radius: 16px;

  border: 2px solid #f5f6fb;
  transition: 0.3s ease-in-out;
  color: #52555f;
  background-color: transparent;

  &:hover {
    border: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    color: white;
    background-color: #fd812d;
  }
`;
