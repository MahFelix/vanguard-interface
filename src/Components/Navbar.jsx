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
    .menu-links {
      display: none; /* Esconde os links na versão mobile */
    }

    .hamburger {
      display: block; /* Exibe o ícone de hambúrguer */
      cursor: pointer;
      z-index: 10; /* Certifica-se de que o hambúrguer está acima de outros elementos */
    }
  }
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #0d1117;
    height: 100vh;
    width: 200px;
    justify-content: center;
    padding: 2rem;
    transform: translateX(100%);
    animation: ${props => (props.isOpen ? slideIn : slideOut)} 0.3s forwards;
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
      <div>Vanguard Advocacia</div>
      <Hamburger className="hamburger" onClick={toggleMenu}>
        <div style={{ transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'rotate(0)' }} />
        <div style={{ opacity: isOpen ? 0 : 1 }} />
        <div style={{ transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0)' }} />
      </Hamburger>
      <MenuLinks className="menu-links" isOpen={isOpen}>
      <Link to="hero" smooth={true} duration={500} onClick={toggleMenu} href='hero'>Início</Link>
        <Link to="about" smooth={true} duration={500} onClick={toggleMenu} href='about'>Sobre Nós</Link>
        <Link to="artigos" smooth={true} duration={500} onClick={toggleMenu} href='artigos'>Artigos</Link>
        <Link to="areas" smooth={true} duration={500} onClick={toggleMenu} href='areas'>Área de Atuação</Link>
        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} href='contact'>Contato</Link>
      </MenuLinks>
    </NavbarContainer>
  );
};

export default Navbar;
