import React from "react";
import styled from 'styled-components';

const ArticlePage = () => {
    return (
      <Container>
        <h1>초기 환경 세팅</h1>
      </Container>
    );
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray-300);
`;
  
export default ArticlePage;