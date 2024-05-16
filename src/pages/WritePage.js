import { React, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { writeArticle } from '../server/service/article';
import { writePost } from "../server/service/community";
import { getCurrentDate } from "../util/getCurrentDate";
import { userState } from '../recoil/userState';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SubmitButton from '../components/button/SubmitButton';
import NotificationModal from '../components/contact/NotificationModal';

const WritePage = () => {
  const userData = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab');
  const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);

  const onClickLogo = () => {
    navigate("/");
  };

  const closeModal = () => {
    setIsNotiModalOpen(false);
  };
  
  const onClickLogOutButton = () => {
    setUser({ writerId: '', isManager: false });
    navigate('/'); 
  };
  
  const onClickNoticeLogo = () => {
    if (!userData.writerId) {
      alert("로그인을 해주세요");
      return;
    }
    setIsNotiModalOpen(true);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onClickSubmitButton = () => {
    if (tab === '아티클') {
      writeArticlePost();
    } else if (tab === '커뮤니티') {
      writeCommunityPost();
    }
    navigate("/");
  };

  const writeArticlePost = async () => {
    try {
      const currentDate = getCurrentDate();
      const data = {
        date: currentDate,
        title: title,
        content: content,
        writerId: userData.writerId
      };
      const response = await writeArticle(data);
      console.log('아티클 작성 성공:', response);
      navigate("/");
    } catch (error) {
      console.error('아티클 작성 실패:', error);
    }
  };

  const writeCommunityPost = async () => {
    try {
      const currentDate = getCurrentDate();
      const data = {
        date: currentDate,
        title: title,
        content: content,
        writerId: userData.writerId
      };
      const response = await writePost(data);
      console.log('커뮤니티 게시글 작성 성공:', response);
      navigate("/");
    } catch (error) {
      console.error('커뮤니티 게시글 작성 실패:', error);
    }
  };

  return (
    <Container>
      <Header
        isLog={!!userData.writerId}
        onClickLogo={onClickLogo}
        onClickLogOutButton={onClickLogOutButton}
        onClickNoticeLogo={onClickNoticeLogo}
      />
      <WrapperArea>
        <TitleArea>
          <TabText>{tab}</TabText>
          <TitleInput
            placeholder="제목을 입력해주세요."
            value={title}
            onChange={onChangeTitle}
          />
        </TitleArea>
        <ContentArea>
          <ContentTextarea
            placeholder="내용을 입력해주세요."
            value={content}
            onChange={onChangeContent}
          />
          <ButtonArea>
            <SubmitButton text='임시저장' />
            <SubmitButton text='등록하기' onClick={onClickSubmitButton} />
          </ButtonArea>
        </ContentArea>
      </WrapperArea>
      <Footer />
      <NotificationModal
        isOpen={isNotiModalOpen}
        onClose={closeModal}
        userId={userData.writerId}
      />
    </Container>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 240px);
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #B4B4B4;
  margin-top: 100px;
  padding: 0px 40px 40px 40px;
  gap: 14px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 10px;
`;

const TabText = styled.div`
  font-size: var(--font-size-md);
  color: #B4B4B4;
`;

const TitleInput = styled.input`
  width: 100wh;
  font-size: var(--font-size-xl);
  color: var(--color-gray-500);
  border: none;
  outline: none;
`;

const ContentTextarea = styled.textarea`
  width: 100wh;
  height: auto;
  min-height: 450px; /* 최소 높이 설정 */
  padding: 0px 40px;
  font-size: var(--font-size-lm);
  color: var(--color-gray-500);
  border: none;
  outline: none;
  resize: none;
`;

export default WritePage;
