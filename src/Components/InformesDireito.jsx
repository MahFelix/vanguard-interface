import styled from "styled-components";
import ESTATUA from '../assets/estatua.png'
import BGDIREITOS from '../assets/ADV3.png'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: url(${BGDIREITOS}) no-repeat center center/cover;
  color: white;
  padding: 8rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: -63px; /* Ajuste para sobrepor a seção superior */
  left: 0;
  width: 50%;
  max-width: 430px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    position: static;
    width: 80%;
    margin-bottom: 1.5rem;

    img {
        display: none;
    }
  }
`;

const Content = styled.div`
  width: 40%;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  margin-left: 750px;


  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000000;
    
  }

  p {
    width: 100%;
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color: #000000c1;
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    background-color: #283040;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 200px;

    &:hover {
      background-color: #d98204;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    margin-left:0;
    width: 100%;
    align-items: center
   
  }
`;

const ImageAndTextSection = () => {
  return (
    <Section>
      <ImageWrapper>
        <img src={ESTATUA} alt="Imagem descritiva" />
      </ImageWrapper>
      <Content>
        <h2>DEFENDENDO SEUS DIREITOS COM EXCELÊNCIA E JUSTIÇA</h2>
        <p>
        Na advocacia, a busca pela verdade e pela justiça é mais do que um princípio, é a essência de nosso trabalho. Assim como a estátua que simboliza a imparcialidade e a força da lei, estamos aqui para proteger seus direitos com ética, compromisso e determinação.
        </p>
        <button>Saiba Mais</button>
      </Content>
    </Section>
  );
};

export default ImageAndTextSection;
