import { React, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getAllArticle } from '../server/service/article';
import { getAllPosts } from "../server/service/community";
import { userState } from '../recoil/userState';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Tab from '../components/Tab';
import PostList from '../components/post/PostList';
import WriteButton from "../components/button/writeButton";
import logo from '../assets/logo.svg';
import NotificationModal from '../components/contact/NotificationModal';

const ArticleDataList = [
  {
    id: "1",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
  {
    id: "2",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
  {
    id: "3",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
  {
    id: "4",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
  {
    id: "5",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
];

const CommunityDataList = [
  {
    id: "1",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
  {
    id: "2",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    writerId: "manager@naver.com"
  },
];

const MainPage = () => {
    const [activeTab, setActiveTab] = useState('아티클');
    const userData = useRecoilValue(userState);
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();
    const [articleData, setArticleData] = useState([]);
    const [communityData, setCommunityData] = useState([]);
    const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);

    const closeModal = () => {
      setIsNotiModalOpen(false);
    };

    const onClickLogo = () => {
      navigate("/");
    };

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
      setIsNotiModalOpen(true);
    };

    const onClickTab = (text) => {
      setActiveTab(text);
    };

    const onClickWriteButton = () => {
      if (!userData.writerId) {
        alert("로그인을 해주세요");
        return;
      }
      navigate(`/write?tab=${activeTab}`);
    };

    useEffect(() => {
      if (activeTab === '아티클') {
        getAllArticleData();
      } else {
        getAllCommunityData();
      }
    }, [activeTab]);

    const getAllArticleData = async () => {
      try {
        const article_response = await getAllArticle();
        setArticleData(article_response.data);
      } catch (error) {
        console.error('아티클 데이터 가져오기 실패:', error);
      }
    };

    const getAllCommunityData = async () => {
      try {
        const com_response = await getAllPosts();
        setCommunityData(com_response.data);
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
        <ContentArea>
          <TitleArea>
            <Logo src={logo} />
            <Intro>스타트업의 여러 사례를 읽고 성공을 향해 나아가봐요 ^.^</Intro>
          </TitleArea>
          <Tab activeTab={activeTab} onClick={onClickTab} setActiveTab={setActiveTab} />
          <WriteArea>
            {activeTab === '아티클' && !!userData.isManager && <WriteButton text='아티클 작성' onClick={onClickWriteButton} />}
            {activeTab === '커뮤니티' && <WriteButton text='커뮤니티 글 작성' onClick={onClickWriteButton} />}
          </WriteArea>
          <PostContent>
            {activeTab === '아티클' && <PostList activeTab='아티클' DataList={articleData} />}
            {activeTab === '커뮤니티' && <PostList activeTab='커뮤니티' DataList={communityData} />}
          </PostContent>
        </ContentArea>
        <Footer />
        <NotificationModal
          isOpen={isNotiModalOpen}
          onClose={closeModal}
          userId={userData.writerId}
        />
      </Container>
    );
  };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh-2px);
`;

const ContentArea = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - 240px);
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0px 20px 0px;
  gap: 10px;
`;

const WriteArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 3px;
`;

const PostContent = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const Logo = styled.img`
  width: 192px;
  height: 63px;
`;

const Intro = styled.div`
  font-size: var(--font-size-ls);
`;

export default MainPage;