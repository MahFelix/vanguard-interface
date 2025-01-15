import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';
import React from 'react';

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: #0d1117;
  padding: 1rem 2rem;
  color: white;
  position: relative;

  a {
    margin: 0 1rem;
    text-decoration: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      color: #f29f05;
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    z-index: 1000;
    background: #0d1117d8;
    
    .menu-links {
      display: none;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }
  }
`;

const Logo = styled.img`
  width: 40px;
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  a {
    border: 1px solid white;
    padding: 16px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 95px;
    right: -25px;

    height: 20vh;
    width: 200px;
    gap: 10px;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transform: translateX(${props => (props.isOpen ? '0' : '100%')});
    animation: ${props => (props.isOpen ? slideIn : slideOut)} 0.3s forwards;


    a { 
      display: flex;
      gap: 10px;
      width: 150px;
     height: 200px;
     padding: 8px;
      justify-content: center;
      align-items: center;
      background-color: #0d1117c5;
    
    }
    
  }
`;

const Hamburger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 30px;
    height: 30px;
    position: relative;

    div {
      background-color: #ffffff;
      height: 4px;
      width: 100%;
      position: absolute;
      transition: transform 0.3s ease;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2) {
        top: 8px;
      }

      &:nth-child(3) {
        top: 16px;
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo src="/ADVICON.svg" alt="Logo-icon" />
      <div>VANGUARD ADVOCACIA</div>
      <Hamburger onClick={toggleMenu}>
        <div style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg)' : 'rotate(0)' }} />
      </Hamburger>
      <MenuLinks isOpen={isOpen}>
        <Link to="hero" smooth={true} duration={500} onClick={toggleMenu}>Início</Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>Sobre Nós</Link>
        <Link to="artigos" smooth={true} duration={500} onClick={toggleMenu}>Artigos</Link>
        <Link to="areas" smooth={true} duration={500} onClick={toggleMenu}> Atuação</Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contato</Link>
      </MenuLinks>
    </NavbarContainer>
  );
};

export default Navbar;
