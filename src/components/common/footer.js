import React from 'react';
import styled from 'styled-components';

const footer = () => {
  return (
    <Container>
      <FooterArea>
        <Copyright>© 2024 Failless</Copyright>
        <Info>국내 스타트업 대표와 예비 대표들을 위한 칼럼 및 커뮤니티</Info>
        <Info>아티클 문의 : jinwook2765@kookmin.ac.kr | nyc725030@kookmin.ac.kr</Info>
        <Contributer>대표자 : 신진욱, 남윤찬 | 국민대학교 소프트웨어학부</Contributer>
      </FooterArea>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 240px;
  border-top: 1px solid #B4B4B4;
`;

const FooterArea = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 800px;
  }
  gap: 10px;
`;

const Copyright = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-gray-500);
`;

const Info = styled.div`
  font-size: var(--font-size-md);
  color: var(--color-gray-300);
`;

const Contributer = styled.div`
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
  margin-top: 20px;
`;

export default footer
