import React from 'react';
import styled from 'styled-components';

const SubmitButton = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      {text}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  border-radius: 15px;
  border: 1px solid #B4B4B4;
  font-size: 18px;
  color: var(--color-gray-500);
  background-color: #FFF;
  cursor: pointer;
`;

export default SubmitButton;
