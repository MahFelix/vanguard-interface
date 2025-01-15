import styled from "styled-components";
import { FaGavel, FaBalanceScale, FaRegHandshake, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DRA from '../assets/Doutor3.webp'; // Substitua por mais imagens conforme necessário
import { useState } from "react";
import DR1 from '../assets/Doutor1.webp';
import DR2 from '../assets/Doutor2.webp';


const TeamSection = styled.section`
  background-color: #1c1f26;
  color: #ffffff;
  text-align: center;
  padding: 12rem 2rem 2rem;
  position: relative;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 4rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 4rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const CardsContainer = styled.div`
  position: absolute;
  top: -65px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: center;
    display: none;
  }
`;

const Card = styled.div`
  background: rgba(230, 119, 45, 0.404);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  flex: 1;
  max-width: 350px;
  height: 250px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #1c1f26;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    max-width: 280px;
    margin-bottom: 1rem;
  }
`;

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 3rem;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.2s;
  width: 200px;

  &:hover {
    transform: scale(1.2);
    color: #f29f05;
  }

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background: #2b2f3a;
  padding: 1.5rem;
  border-radius: 8px;
  width: 100%;
  height: 300px;
  max-width: 700px;

  img {
    width: 300px;
    height: 250px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 1.5rem;
  }

  .profile-info {
    text-align: left;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
padding: 24px ;

    img {
      width: 270px;
      height: 250px;
      margin-right: 0;
      margin-bottom: 1rem;
    }

    .profile-info {
      text-align: center;

      h3 {
        font-size: 1.2rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
`;

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dados simulados de advogados
  const lawyers = [
    {
      name: "Dra. Roberta Mercenas",
      description:
        "Especialista em Direito Civil com mais de 10 anos de experiência.",
      image: DRA,
    },
    {
      name: "Dr. João Silva",
      description:
        "Focado em Direito Penal, com uma abordagem inovadora e estratégica.",
      image: DR1, // Substitua por outra imagem
    },
    {
      name: "Dra. Camila Oliveira",
      description:
        "Atuação em Direito Trabalhista, sempre buscando justiça para seus clientes.",
      image: DR2, // Substitua por outra imagem
    },
  ];

  // Função para mover o carrossel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lawyers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === lawyers.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <TeamSection id="areas">
      <h2>CONHEÇA NOSSOS ADVOGADOS</h2>

      {/* Cards de Sobreposição */}
      <CardsContainer>
        <Card>
          <FaGavel />
          <p>
            Experiência em litígios judiciais para garantir resultados eficazes.
          </p>
        </Card>
        <Card>
          <FaBalanceScale />
          <p>
            Compromisso com a ética e o equilíbrio em todas as causas.
          </p>
        </Card>
        <Card>
          <FaRegHandshake />
          <p>
            Parcerias sólidas e confiança na resolução de conflitos.
          </p>
        </Card>
      </CardsContainer>

      {/* Carrossel */}
      <Carousel>
        <ArrowButton onClick={handlePrev}>
          <FaArrowLeft />
        </ArrowButton>
        <ProfileCard>
          <img src={lawyers[currentIndex].image} alt={`Foto de ${lawyers[currentIndex].name}`} />
          <div className="profile-info">
            <h3>{lawyers[currentIndex].name}</h3>
            <p>{lawyers[currentIndex].description}</p>
          </div>
        </ProfileCard>
        <ArrowButton onClick={handleNext}>
          <FaArrowRight />
        </ArrowButton>
      </Carousel>
    </TeamSection>
  );
};

export default Team;
