import { React, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import SubmitButton from '../components/button/SubmitButton';

const WritePage = () => {
  const [isLog, setIsLog] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tab = searchParams.get('tab');

  const onClickLogo = () => {
    navigate("/");
  }
  
  const onClickLogOutButton = () => {
    navigate("/");
  };
  
  const onClickNoticeLogo = () => {
    alert("알림 로고 클릭");
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const onClickSubmitButton = () => {
    navigate("/");
  }

  return (
    <Container>
      <Header
        isLog={isLog}
        onClickLogo={onClickLogo}
        onClickLogInButton={onClickLogOutButton}
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
