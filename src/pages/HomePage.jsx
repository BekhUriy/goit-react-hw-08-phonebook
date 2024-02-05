import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; /* Замість градієнта - використовуйте власний колір фону */
  color: lightBlue;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 80px;
  text-align: center;
  white-space: pre-wrap;
`;

const HomePage = () => {
  return (
    <Container>
      <Title>
        Welcome to your phonebook!
        <br />
        Please register!
      </Title>
    </Container>
  );
};

export default HomePage;
