import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getArticle } from '../server/service/article';
import { getPost } from "../server/service/community";
import userState from '../recoil/userState';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import contactLogo from '../assets/contactLogo.svg';

const CommunityDataList = 
    {
      id: "1",
      date: "2024.05.10",
      title: "OOAD",
      content: "객지분 프로젝트",
      writerId: "manager@naver.com"
    };

const PostDetailPage = () => {
  const userData = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { postId } = useParams();
  const tab = searchParams.get('tab');
  const data = CommunityDataList;
  const [ddata, setDdata] = useState([]);

  const onClickLogo = () => {
    navigate("/");
  }

  const onClickLogInButton = () => {
    navigate("/signin");
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
  };

  useEffect(() => {
    if (tab === '아티클') {
      getArticleData();
    } else {
      getCommunityData();
    }
  }, []);

  const getArticleData = async (postId) => {
    try {
      const response = await getArticle(postId);
      setDdata(response.data);
    } catch (error) {
      console.error('아티클 데이터 가져오기 실패:', error);
    }
  };

  const getCommunityData = async (postId) => {
    try {
      const response = await getPost(postId);
      setDdata(response.data);
    } catch (error) {
      console.error('커뮤니티 데이터 가져오기 실패:', error);
    }
  };

  return (
    <Container>
      <Header
        isLog={!!userData.writerId}
        onClickLogo={onClickLogo}
        onClickLogInButton={onClickLogInButton}
        onClickLogOutButton={onClickLogOutButton}
        onClickNoticeLogo={onClickNoticeLogo}
      />
      <WrapperArea>
        <TitleArea>
          <TabText>{tab}</TabText>
          <TitleText>{data.title}</TitleText>
          <InfoText>{data.date} | {data.writerId}</InfoText>
        </TitleArea>
        <ContentArea>
            <ContentTextarea
              value={data.content}
              readOnly
            />
        </ContentArea>
        <ContactLogo src={contactLogo} />
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

const ContentTextarea = styled.textarea`
  width: 100wh;
  height: auto;
  min-height: 450px; /* 최소 높이 설정 */
  padding: 0px 40px;
  font-size: 18px;
  color: var(--color-gray-500);
  border: none;
  outline: none;
  resize: none;
`;

const ContactLogo = styled.img`
  position: fixed;
  width: 60px;
  height: 60px;
  right: 40px;
  bottom: 280px;
`;

export default PostDetailPage;
