import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signin } from '../server/service/member';
import { useCookies } from 'react-cookie';
import { useRecoilState } from 'recoil';
import userState from '../recoil/userState';
import styled from 'styled-components';
import Input from '../components/Input';
import LandingButton from '../components/button/LandingButton';
import logo from '../assets/logo.svg';

const SigninPage = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const [user, setUser] = useRecoilState(userState);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  

  const onChangeId = e => {
    setId(e.target.value);
  };

  const onChangePassWord = e => {
    setPassword(e.target.value);
  };

  const onClickButton = async () => {
    try {
      const response = await signin(id, password);
      // 로그인 성공 처리
      setCookie('token', response.data.token);
      const { userInfo } = response.data;
      setUser(userInfo);
      navigate('/'); // 로그인 후 이동할 페이지로 설정
    } catch (error) {
      // 로그인 실패 처리
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  const onClickSignUp = () => {
    navigate('/signup');
  }
  
  return (
    <Container>
      <Logo src={logo} />
      <Title>국내 스타트업 대표와 예비 대표들을 위한 칼럼 및 커뮤니티</Title>
      <LogArea>
        <InputArea>
          <Text>아이디</Text>
          <Input onChange={onChangeId} value={id} placeholder={"이메일을 입력 해주세요."} />
        </InputArea>
        <InputArea>
          <Text>비밀번호</Text>
          <Input onChange={onChangePassWord} value={password} placeholder={"비밀번호를 입력 해주세요."}/>
        </InputArea>
        <LandingButton text={"로그인하기"} onClick={onClickButton} />
        <LinkArea>
          <LinkText>비밀번호 찾기</LinkText>
          <LinkText onClick={onClickSignUp}>회원가입</LinkText>
        </LinkArea>
      </LogArea>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const LogArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
`;

const LinkArea = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.div`
  diplay: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-ls);
  margin: 10px 0px 70px 0px;
`;

const Text = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

const LinkText = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  font-size: var(--font-size-md);
  color: #B4B4B4;
`;

const Logo = styled.img`
  width: 192px;
  height: 63px;
`;

export default SigninPage;