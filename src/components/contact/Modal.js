import React, { useState } from 'react';
import styled from 'styled-components';
import { Contact } from '../../server/service/contact';

const Modal = ({ isOpen, onClose, senderId, receiverId }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        senderId: senderId,
        receiverId: receiverId,
        message: message
      };
      const response = await Contact(data);
      console.log(response);
      alert('메시지가 전송되었습니다.');
      onClose();
    } catch (error) {
      console.error('메시지 전송 실패:', error);
      alert('메시지 전송에 실패했습니다.');
    }
  };

  return (
    <>
      {isOpen && (
        <Container onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>컨택하기</ModalTitle>
              <CloseButton onClick={onClose}>X</CloseButton>
            </ModalHeader>
            <ModalContent>
              <form onSubmit={handleSubmit}>
                <Label>내용:</Label>
                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                <SubmitButton type="submit">보내기</SubmitButton>
              </form>
            </ModalContent>
          </ModalContainer>
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

const ModalContainer = styled.div`
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

const ModalContent = styled.div``;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  margin-bottom: 10px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

export default Modal;