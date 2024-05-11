import styled from 'styled-components';

const Input = ({ onChange, value, placeholder }) => {
  return (
    <Container>
      <StyledInput
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  border: 2px solid #E7E7E7;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  outline: none;
  font-size: var(--font-size-md);
  padding: 18px;
`;

export default Input;