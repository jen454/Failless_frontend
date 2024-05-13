import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';
import login from '../../assets/login.svg';
import logout from '../../assets/logout.svg';
import alertLogo from "../../assets/noticeLogo.svg";

const header = ({ isLog, onClickLogo, onClickLogInButton, onClickNoticeLogo }) => {
  return (
    <Container>
      <HeaderArea>
        <Logo src={logo} onClick={onClickLogo}/>
        <UserArea>
          {isLog === false
            ? <IsLogin src={login} onClick={onClickLogInButton} />
            : <IsLogin src={logout} 
          />}
          <Notice src={alertLogo} onClick={onClickNoticeLogo} />
        </UserArea>
      </HeaderArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #B4B4B4;
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 800px;
  }
`;

const UserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Logo = styled.img`
  width: 128px;
  height: 42px;
`;

const IsLogin = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

const Notice = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export default header;
