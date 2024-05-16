import { React, useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getArticle } from '../server/service/article';
import { getPost } from "../server/service/community";
import { getAllComments } from '../server/service/comment';
import { writeComment } from '../server/service/comment';
import { userState } from '../recoil/userState';
import styled from 'styled-components';
import Header from '../components/common/header';
import Footer from '../components/common/footer';
import CommentList from '../components/comment/CommentList';
import contactLogo from '../assets/contactLogo.svg';
import Modal from '../components/contact/Modal';
import NotificationModal from '../components/contact/NotificationModal';

const CommunityDataList = 
    {
      id: "1",
      date: "2024.05.10",
      title: "OOAD",
      content: "객지분 프로젝트",
      writerId: "manager@naver.com"
    };

const CommentDataList = [
  {
    "content": "프로젝트 프론트엔드",
    "writerId": "신진욱",
    "postId": 1
  },
  {
    "content": "프로젝트 백엔드",
    "writerId": "남윤찬",
    "postId": 1
  },
  {
    "content": "A+ 기원",
    "writerId": "ooad",
    "postId": 1
  },
];

const PostDetailPage = () => {
  const userData = useRecoilValue(userState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { postId } = useParams();
  const tab = searchParams.get('tab');
  const [data, setData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [comment, setComment] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNotiModalOpen, setIsNotiModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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

  const onChangeComment = e => {
    setComment(e.target.value);
  };

  const onClickConfirmButton = async () => {
    if (!comment.trim()) {
      alert('댓글을 입력해주세요.');
      return;
    };

    const commentData = {
      content: comment,
      writerId: userData.writerId,
      postId: postId
    };

    try {
      const response = await writeComment(commentData);
      console.log('댓글 작성 성공:', response);
      setComment('');
      getAllCommentData(postId);
    } catch (error) {
      console.error('댓글 작성 실패:', error);
      alert('댓글 작성에 실패했습니다.');
    };
  };

  const getAllCommentData = async (postId) => {
    try {
      const response = await getAllComments(postId);
      setCommentData(response.data);
    } catch (error) {
      console.error('아티클 데이터 가져오기 실패:', error);
    };
  };

  const getArticleData = async () => {
    try {
      const response = await getArticle(postId);
      setData(response.data);
    } catch (error) {
      console.error('아티클 데이터 가져오기 실패:', error);
    };
  };

  const getCommunityData = async () => {
    try {
      const response = await getPost(postId);
      setData(response.data);
    } catch (error) {
      console.error('커뮤니티 데이터 가져오기 실패:', error);
    };
  };

  useEffect(() => {
    if (tab === '아티클') {
      getArticleData();
    } else {
      getCommunityData();
      getAllCommentData(postId);
    }
  }, []);

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
        {tab === "커뮤니티" &&
          <CommentArea>
            <CommentTitle>Comment</CommentTitle>
            <CommentInput onChange={onChangeComment} value={comment} placeholder='댓글을 입력해주세요.' />
            <CommentButton onClick={onClickConfirmButton}>확인</CommentButton>
            <CommentList DataList={commentData} />
          </CommentArea>
        }
        {tab === "커뮤니티" && <ContactLogo src={contactLogo} onClick={openModal} />}
      </WrapperArea>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        senderId={userData.writerId}
        receiverId={data.writerId}
      />
      <NotificationModal
        isOpen={isNotiModalOpen}
        onClose={closeModal}
        userId={userData.writerId}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperArea = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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

const CommentArea = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0px 40px;
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
  min-height: 300px; /* 최소 높이 설정 */
  padding: 0px 40px;
  font-size: 18px;
  color: var(--color-gray-500);
  border: none;
  outline: none;
  resize: none;
`;

const CommentInput = styled.input`
  width: 100wh;
  height: 40px;
  min-height: 40px;
  border-radius: 10px;
  border: 1px solid #000;
  background: #FFF;
  padding: 0px 20px;
`;

const CommentTitle = styled.div`
  font-size: var(--font-size-ls);
  padding-left: 20px;
  margin-bottom: 5px;
`;

const CommentButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 5px 15px; 0px; 0px;
  font-size: var(--font-size-ls);
  color: #6D6D6D;
  cursor: pointer;
`;

const ContactLogo = styled.img`
  position: fixed;
  width: 60px;
  height: 60px;
  right: 40px;
  bottom: 280px;
  cursor: pointer;
`;

export default PostDetailPage;
