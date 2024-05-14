import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../components/Input';
import LandingButton from '../components/button/LandingButton';
import content_logo from '../assets/logo.svg';
import { signup } from '../server/service/member';

const SignUpPage = () => {
  const navigate = useNavigate();
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
      const response = await signup(id, password);
      // 회원가입 성공 처리
      navigate('/signin'); // 회원가입 후 로그인 페이지로 이동
    } catch (error) {
      // 회원가입 실패 처리
      console.error('회원가입 실패:', error);
      alert('회원가입에 실패했습니다.');
    }
  }
  
  
  return (
    <Container>
      <Logo src={content_logo} />
      <Title>국내 스타트업 대표와 예비 대표들을 위한 칼럼 및 커뮤니티</Title>
      <LogArea>
        <InputArea>
          <Text>아이디</Text>
          <Input onChange={onChangeId} value={id} placeholder={"이메일을 입력 해주세요."} />
        </InputArea>
        <InputArea>
          <Text>비밀번호</Text>
          <Input onChange={onChangePassWord} value={password} placeholder={"비밀번호를 입력 해주세요. (영어 대/소문자, 숫자 8자 이상)"}/>
        </InputArea>
        <LandingButton text={"회원가입"} onClick={onClickButton} />
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
  gap: 40px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
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

const Logo = styled.img`
  width: 192px;
  height: 63px;
`;

export default SignUpPage;