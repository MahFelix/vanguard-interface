import styled from "styled-components";
import ESTATUA from '../assets/estatua.png'
import BGDIREITOS from '../assets/ADV3.webp'

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: url(${BGDIREITOS}) no-repeat center center/cover;
  color: white;
  position: relative;
 

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative; /* Permite que a posição dependa do fluxo do layout */
  width: 40%;
  max-width: 430px;
  margin-right: auto; /* Garante espaçamento natural à direita */
  margin-left: 190px;
  margin-bottom: -5px;
  margin-top: -50px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  @media (max-width: 1237px) {
    width: 80%; /* Ajusta o tamanho da imagem para telas menores */
    max-width: none; /* Remove limite fixo */
    margin: 0 auto 1.5rem; /* Centraliza a imagem e dá espaçamento inferior */

    img {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 80%; /* Ajusta o tamanho da imagem para telas menores */
    max-width: none; /* Remove limite fixo */
    margin: 0 auto 1.5rem; /* Centraliza a imagem e dá espaçamento inferior */
  }
`;





const Content = styled.div`
  width: 40%; /* Faz o texto ocupar mais espaço */
  margin-right: 21rem;
  display: flex;
  flex-direction: column;
  margin-left: auto; /* Mantém o texto alinhado à direita */

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #000000;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    color: #000000c1;
  }

  button {
    display: flex;
    justify-content: center;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border: none;
    background-color: #214285;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 200px;
    align-items: center;

    &:hover {
      background-color: #d98204;
    }
  }

  @media (max-width: 768px) {
    width: 100%; /* Expande para usar todo o espaço */
    text-align: center; /* Centraliza o conteúdo no mobile */
    display: flex;
    justify-content: center;
   

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
  }
`;


const ImageAndTextSection = () => {
  return (
    <Section id="artigos">
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
