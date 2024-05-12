import React from 'react';
import styled from 'styled-components';

const LandingButton = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

const Text = styled.div`
  font-size: var(--font-size-sm);
`;

export default LandingButton;
