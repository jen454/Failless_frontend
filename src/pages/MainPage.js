import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import Tab from '../components/Tab';
import PostList from '../components/post/PostList';
import WriteButton from "../components/button/writeButton";
import logo from '../assets/logo.svg';

const ArticleDataList = [
  {
    id: "1",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
  {
    id: "2",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
  {
    id: "3",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
  {
    id: "4",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
  {
    id: "5",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
];

const CommunityDataList = [
  {
    id: "1",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
  {
    id: "2",
    date: "2024.05.10",
    title: "OOAD",
    content: "객지분 프로젝트",
    nickname: "매니저"
  },
];

const MainPage = () => {
    const [isLog, setIsLog] = useState(false);
    const [activeTab, setActiveTab] = useState('아티클');
    const [isManager, setIsMagneger] = useState(false);
    const navigate = useNavigate();

    const onClickLogo = () => {
      navigate("/");
    }

    const onClickLogInButton = () => {
      navigate("/signin");
    };
    
    const onClickNoticeLogo = () => {
      alert("알림 로고 클릭");
    };

    const onClickTab = (text) => {
      setActiveTab(text);
    }

    const onClickWriteButton = () => {
      navigate(`/write?tab=${activeTab}`);
    } 

    return (
      <Container>
        <Header
          isLog={isLog}
          onClickLogo={onClickLogo}
          onClickLogInButton={onClickLogInButton}
          onClickNoticeLogo={onClickNoticeLogo}
        />
        <ContentArea>
          <TitleArea>
            <Logo src={logo} />
            <Intro>스타트업의 여러 사례를 읽고 성공을 향해 나아가봐요 ^.^</Intro>
          </TitleArea>
          <Tab activeTab={activeTab} onClick={onClickTab} setActiveTab={setActiveTab} />
          <WriteArea>
            {activeTab === '아티클' && <WriteButton text='아티클 작성' onClick={onClickWriteButton} />}
            {activeTab === '커뮤니티' && <WriteButton text='커뮤니티 글 작성' onClick={onClickWriteButton} />}
          </WriteArea>
          <PostContent>
            {activeTab === '아티클' && <PostList activeTab='아티클' DataList={ArticleDataList} />}
            {activeTab === '커뮤니티' && <PostList activeTab='커뮤니티' DataList={CommunityDataList} />}
          </PostContent>
        </ContentArea>
        <Footer />
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