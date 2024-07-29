import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [hovered, setHovered] = useState(false);
  const [message, setMessage] = useState('');

  const email = 'ankitjodhani1903@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setMessage('Email copied!');
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  return (
    <Container id="contact">
      <Content>
        <h4>How can you communicate?</h4>
        <h1>Contact Me</h1>
        <img src="./images/contact.png" alt="contact form" />
        <Reach>
          <Links 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={copyEmail}
          >
            <a href="#" onClick={(e) => e.preventDefault()}>
              <i className='bx bx-envelope'></i>
            </a>
            {hovered && <EmailText>{email}</EmailText>}
          </Links>
          <Links>
            <a href="https://www.linkedin.com/in/ankit-jodhani/" target='_blank'><i className='bx bxl-linkedin-square' ></i></a>
          </Links>
          <Links>
            <a href="https://twitter.com/Ankit__Jodhani" target='_blank'><i className='bx bxl-github' ></i></a>
          </Links>
          <Links>
            <a href="https://github.com/AnkitJodhani" target='_blank'><i className='bx bxl-twitter' ></i></a>
          </Links>
        </Reach>
        {message && <Message>{message}</Message>}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 80px 20px;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    color: #444444;
    margin-bottom: 12px;
  }
  h1 {
    font-size: 40px;
    color: #695aa6;
    font-weight: 900;
    margin-bottom: 20px;
  }
  img {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 400px) {
    img{
      width: 300px;
      height: 300px;
    }
  }
`;

const Reach = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 25px;
`;

const Links = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  width: 50px;
  height: 50px;
  border: 2px solid #6c757d;
  border-radius: 10px;
  transition: 0.3s ease;
  cursor: pointer;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 25px;
    color: #6c757d;
  }

  &:hover {
    background: #695aa6;
    border: none;

    a {
      color: #fff;
    }
  }
`;

const EmailText = styled.span`
  position: absolute;
  top: -50px;
  background-color: #f5f5f5;
  color: #000;
  padding: 12px;
  border-radius: 5px;
  font-size: 16px;
  white-space: nowrap;
`;

const Message = styled.div`
  margin-top: 12px;
  color: #008000;
  padding: 10px;
  background-color: #f5f5f5;

`;

export default Contact;
