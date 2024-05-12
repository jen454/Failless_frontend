import { React } from 'react';
import styled from 'styled-components';

const Tab = ({ activeTab, setActiveTab }) => {
  return (
    <Container>
      <TabItem
        isActive={activeTab === '아티클'}
        onClick={() => {
          setActiveTab('아티클');
        }}
      >
        아티클
      </TabItem>
      <TabItem
        isActive={activeTab === '커뮤니티'}
        onClick={() => {
          setActiveTab('커뮤니티');
        }}
      >
        커뮤니티
      </TabItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TabItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
  padding: 20px 0;
  font-size: ${props => {
    return props.isActive ? '18px' : '18px';
  }};
  color: ${props => {
    return props.isActive ? '#6D6D6D' : 'var(--color-gray-200)';
  }};
  border-bottom: ${props => {
    return props.isActive
      ? '3px solid #6D6D6D'
      : '1.5px solid var(--color-gray-200)';
  }};
`;

export default Tab;