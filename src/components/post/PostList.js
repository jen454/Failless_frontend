import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';

// 전체 포스트 아이템 리스트 컴포넌트
const PostList = ({ activeTab, DataList }) => {
  const navigate = useNavigate();
  const onClickPostList = (postId) => {
    navigate(`/post-detail/${postId}?tab=${activeTab}`);
  };
  return (
    <Container>
      {DataList.map(data => {
        return (
          <PostItem
            key={data.id}
            tab={activeTab}
            post={data}
            onClick={() => {
              return onClickPostList(data.id);
            }}
          />
        );
      })}
    </Container>
  );
};

// 스타일 컴포넌트
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 10px; // 간격 조절
`;

export default PostList;