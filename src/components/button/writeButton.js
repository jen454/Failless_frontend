import React from 'react';
import styled from 'styled-components';

const writeButton = ({ text, onClick }) => {
  return (
    <Container onClick={onClick}>
      {text}
    </Container>
  )
}

const Container = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: center;
  padding: 11px; 10px;
  font-size: var(--font-size-xs);
  background-color: #E7E7E7;
  border-radius: 10px;
  border: 1.5px solid #E7E7E7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default writeButton;
