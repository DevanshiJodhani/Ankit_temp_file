import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Content scrolled={scrolled}>
        <Logo>
          <a href="#home" onClick={closeMenu}>
            A<span>nkit.</span>
          </a>
        </Logo>
        <NavLinks menuOpen={menuOpen}>
          <input type="checkbox" id="click" checked={menuOpen} readOnly />
          <label htmlFor="click" className="menu-btn" onClick={toggleMenu}>
            <i className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`}></i>
          </label>
          <ul>
            <li>
              <a href="#about" onClick={closeMenu}>
                About
              </a>
              <a href="#project" onClick={closeMenu}>
                Project
              </a>
              <a href="#blog" onClick={closeMenu}>
                Blog
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </NavLinks>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 30px;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 1000;
`;

const Content = styled.div`
  margin: auto;
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  backdrop-filter: blur(20px);
  transition: background 0.3s ease, border 0.3s ease;
  background: ${({ scrolled }) => (scrolled ? '#333' : 'transparent')};
  border: ${({ scrolled }) => (scrolled ? 'none' : '1px solid #fff')};
  border-radius: 84px;

  @media screen and (max-width: 1480px) {
    width: 50%;
  }

  @media screen and (max-width: 1230px) {
    width: 60%;
  }

  @media screen and (max-width: 990px) {
    width: 70%;
    padding: 0 40px;
  }
  @media screen and (max-width: 450px) {
    padding: 0 20px;
  }
`;

const Logo = styled.div`
  a {
    text-align: center;
    font-size: 30px;
    text-decoration: none;
    color: #fff;
    font-weight: 900;
    letter-spacing: 1px;

    span {
      font-size: 25px;
      color: #fff;
    }
  }
  @media screen and (max-width: 450px) {
    a {
      font-size: 25px;
      span {
        font-size: 20px;
      }
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      padding: 5px 20px;
      margin-left: 20px;
      font-size: 18px;
      color: #fff;
      font-weight: 600;
      transition: 0.5s ease;

      &:hover {
        color: #ffd500;
      }
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      position: fixed;
      top: 80px;
      right: ${({ menuOpen }) => (menuOpen ? '0' : '-200%')};
      background: #f5f5f5;
      border-radius: 25px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 20px;
      transition: all 0.4s ease;

      li {
        flex-direction: column;
        text-align: center;
        margin: 20px 0;

        a {
          color: #000;
          padding: 20px;
          font-size: 22px;
          display: block;
        }
      }
    }
  }

  @media screen and (max-width: 450px) {
    margin-left: 0;
  }
`;

export default Header;
