import React from 'react';
import CommentItem from './CommentItem';
import styled from 'styled-components';

// 전체 포스트 아이템 리스트 컴포넌트
const CommentList = ({ DataList }) => {
  return (
    <Container>
      {DataList.map(data => {
        return (
          <CommentItem post={data} />
        );
      })}
    </Container>
  );
};

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  gap: 10px; // 간격 조절
`;

export default CommentList;