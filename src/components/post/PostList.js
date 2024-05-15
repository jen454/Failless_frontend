import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import PostItem from './PostItem';
import userState from '../../recoil/userState';
import styled from 'styled-components';

// 전체 포스트 아이템 리스트 컴포넌트
const PostList = ({ activeTab, DataList }) => {
  const userData = useRecoilValue(userState);
  const navigate = useNavigate();
  const onClickPostList = (postId) => {
    if (!userData.writerId && activeTab === "커뮤니티") {
      alert("로그인을 해주세요");
      return;
    }
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