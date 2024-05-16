import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getAllContacts } from '../../server/service/contact';

const noticeDataList = [
  {
    "content": "마지막이닷!",
    "senderId": "신진욱",
    "receiverId": "test"
  },
  {
    "content": "마지막이닷!",
    "senderId": "1234124251",
    "receiverId": "test"
  },
  {
    "content": "마지막이닷!",
    "senderId": "신진욱",
    "receiverId": "test"
  },
  {
    "content": "마지막이닷!",
    "senderId": "신진욱",
    "receiverId": "test"
  },
  {
    "content": "마지막이닷!",
    "senderId": "신진욱",
    "receiverId": "test"
  },
];

const NotificationModal = ({ isOpen, onClose, userId }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await getAllContacts(userId);
        console.log(response.data);
        setContacts(response.data);
      } catch (error) {
        console.error('컨택 내용을 불러오는 중 에러 발생:', error);
      }
    };
    if (isOpen) {
      fetchContacts();
    }
  }, [isOpen, userId]);

  return (
    <>
      {isOpen && (
        <Container>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>알림 목록</ModalTitle>
              <CloseButton onClick={onClose}>X</CloseButton>
            </ModalHeader>
            <NotificationList>
              {contacts.map(contact => (
                <NotificationItem>
                  <Sender>"{contact.senderId}"님의 컨택 요청이 왔습니다.</Sender>
                  <Buttons>
                    {/* <CloseButton>X</CloseButton> */}
                    <ConfirmButton>확인하기</ConfirmButton>
                  </Buttons>
                </NotificationItem>
              ))}
            </NotificationList>
          </ModalContent>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
`;

const NotificationList = styled.div`
  overflow-y: auto;
  max-height: 300px;
`;

const NotificationItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const Sender = styled.span`
  margin-bottom: 5px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ConfirmButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

export default NotificationModal;
