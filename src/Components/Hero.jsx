import styled from 'styled-components';
import BGDESKTOP from '../assets/AD1.webp'
import BGMOBILE from '../assets/BGMOBILE-ADV.webp'

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  background: url(${BGDESKTOP}) no-repeat center center/cover;
  color: white;


  h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: #000000;
    text-align: center;
    width: 40%;
    max-width: 700px; /* Limitar a largura máxima */
  }

  p {
    color: #000000;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    text-align: center;
    width:30%;
    max-width: 700px; /* Limitar a largura máxima */
   
  }

  button {
    background: #214285;
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    align-self: center;
    width: 30%;
    max-width: 250px; /* Limitar largura máxima do botão */
    transition: background 0.3s ease;

    &:hover {
      background: #d28d04;
    }
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    background: url(${BGMOBILE}) no-repeat center center/cover;
    justify-content: center;
   

    h1 {
      font-size: 2.5rem; /* Ajuste no tamanho da fonte */
    
    }

    p {
      width: 200px;
      font-size: 1.5rem; /* Ajuste no tamanho da fonte */
    }

    button {
      width: 50%; /* Aumentar o tamanho do botão em telas menores */
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem; /* Ajuste para telas muito pequenas */
    }

    p {
      font-size: 1.2rem; /* Ajuste para telas muito pequenas */
    }

    button {
      width: 80%; /* Aumentar o tamanho do botão em telas muito pequenas */
    }
  }
`;

const Hero = () => (
  <HeroSection id='hero'>
    <h1>VANGUARD ADVOCACIA</h1>
    <p>Comprometidos com a justiça e dedicados a você!</p>
    <button>AGENDAR CONSULTA</button>
  </HeroSection>
);

export default Hero;
