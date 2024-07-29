import styled from 'styled-components';
import About from './About';
import Contact from './Contact';
import Project from './Project';

const Home = () => {
  return (
    <Container id='home'>
      <Content>
        <Info>
          <h2>HI!</h2>
          <h1>
            I am Ankit  <br />Jodhani
          </h1>
          <p>FRONTEND WEB <br />DESIGNER</p>
          <a href="#project">Visit My Works</a>
        </Info>
      </Content>
      <About />
      <Project />
      <Contact />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100vh;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(7, 123, 255, 0) 70%,
        rgba(255, 255, 255, 0.99) 100%
      ),
      url('./images/home/spot-lights-background-concept_23-2148639919.avif');
    /* background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(7, 123, 255, 0) 70%,
      rgba(255, 255, 255, 0.99) 100%
    ),
    url('./images/home/home_bg_2.jpeg'); */
  background-position: center top;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const Info = styled.div`
  max-width: 600px;
  width: 100%;
  margin: auto;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  h2 {
    font-size: 60px;
    font-weight: bold;
    margin: 0;
    color: #333;
  }

  h1 {
    font-size: 80px;
    font-weight: bold;
    margin: 10px 0;
    line-height: 1.2;
    color: #222;
  }

  p {
    font-size: 30px;
    letter-spacing: 4px;
    margin: 15px 0;
    color: #333;
  }

  a {
    display: inline-block;
    padding: 15px 30px;
    margin-top: 20px;
    font-size: 16px;
    color: white;
    background-color: #695aa6;
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #695aa6cc;
    }
  }

  @media screen and (max-width: 400px){
    padding-left: 30px;
    h1{
        font-size: 60px;
    }
  }
`;

export default Home;
