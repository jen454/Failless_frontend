import React from 'react';
import styled from 'styled-components';
import userIcon from '../../assets/userIcon.svg';

const CommentItem = ({ post }) => {
  return (
    <Container>
      <UserArea>
        <UserImage src={userIcon} />
        <Writer>{post.writerId}</Writer>
      </UserArea>
      <Content>{post.content}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const UserArea = styled.div`
  display: flex;
  gap: 5px;
`;

const UserImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Writer = styled.div`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
`;

const Content = styled.div`
  font-size: var(--font-size-sm);
  margin: 0px 25px;
`;

export default CommentItem;