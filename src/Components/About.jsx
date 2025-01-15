import styled from 'styled-components';
import LOGO from '../assets/ADV2.png';

const InfoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #283040;
  color: #fff;
  padding: 2rem 1rem;
  gap: 1.5rem;
  width: 100%;
  height: auto; /* Ajusta a altura automaticamente */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center; /* Centraliza o texto em telas menores */
    gap: 2rem; /* Diminui o espaço entre elementos */

    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 300px;
    height: auto;

    @media (max-width: 768px) {
      width: 200px; /* Reduz a largura da imagem em telas menores */
    }
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 600px;

  h2 {
    font-size: 2rem;
    margin: 0;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    color: #ccc;
  }

  @media (max-width: 768px) {
    width: 100%; /* Ajusta o texto para ocupar o espaço completo */
    h2 {
      font-size: 1.5rem; /* Reduz o tamanho do título */
    }
    p {
      font-size: 1rem; /* Reduz o tamanho do texto */
    }
  }
`;

const Info = () => (
  <InfoSection id='about'>
    <ImageWrapper>
      <img src={LOGO} alt="Logo Vanguard Advocacia" />
    </ImageWrapper>
    <TextContent>
      <h2>SOBRE O VANGUARD ADVOCACIA</h2>
      <p>
        No Vanguard Advocacia, acreditamos que cada cliente merece mais do que uma solução jurídica — 
        merece um atendimento personalizado, transparente e comprometido. Nosso escritório foi fundado com a missão de estar 
        na vanguarda do Direito, oferecendo serviços que unem excelência técnica, ética e inovação.
      </p>
    </TextContent>
  </InfoSection>
);

export default Info;
