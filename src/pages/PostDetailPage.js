import { React, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';

const CommunityDataList = 
    {
      id: "1",
      date: "2024.05.10",
      title: "OOAD",
      content: "객지분 프로젝트",
      nickname: "매니저"
    };

const PostDetailPage = () => {
  const [isLog, setIsLog] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { postId } = useParams();
  const tab = searchParams.get('tab');
  const data = CommunityDataList;

  const onClickLogOutButton = () => {
    navigate("/");
  };

  const onClickNoticeLogo = () => {
    alert("알림 로고 클릭");
  };

  return (
    <Container>
      <Header
        isLog={isLog}
        onClickLogInButton={onClickLogOutButton}
        onClickNoticeLogo={onClickNoticeLogo}
      />
      <WrapperArea>
        <TitleArea>
          <TabText>{tab}</TabText>
          <TitleText>{data.title}</TitleText>
          <InfoText>{data.date} | {data.nickname}</InfoText>
        </TitleArea>
        <ContentArea>
            1
        </ContentArea>
      </WrapperArea>
      <Footer />
    </Container>
  )
}

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
  padding: 0px 40px 20px 40px;
  gap: 14px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const TabText = styled.div`
  font-size: var(--font-size-md);
  color: #B4B4B4;
`;

const TitleText = styled.div`
  font-size: var(--font-size-xl);
  color: var(--color-gray-500);
`;

const InfoText = styled.div`
  font-size: var(--font-size-md);
  color: #6D6D6D;
  margin-top: 6px;
`;

export default PostDetailPage;