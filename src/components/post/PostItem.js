import React from 'react';
import styled from 'styled-components';

const PostItem = ({ tab, post, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Content>
        <Category>{tab}</Category>
        <Title>{post.title}</Title>
        <Time>{post.date}</Time>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100wh;
  height: 120px;
  border: 1px solid #D6D6D6;
  cursor: pointer;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
`;

const Category = styled.div`
  font-size: var(--font-size-sm);
  color: #6D6D6D;
`;

const Title = styled.div`
  font-size: var(--font-size-xl);
  margin-top: 5px;
  margin-bottom: 20px;
`;

const Time = styled.div`
  font-size: var(--font-size-sm);
  color: #6D6D6D;
`;

export default PostItem;