import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2C3E50;
  color: white;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  width: 100%;
  justify-content: space-between;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Column = styled.div`
  flex: 1;
  padding: 10px;
  min-width: 250px;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Title = styled.h3`
  color: #F29F05;
  margin-bottom: 20px;
`;

const ContactItem = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: #F29F05;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Column>
          <Title>Contato</Title>
          <ContactItem>Telefone: (11) 1234-5678</ContactItem>
          <ContactItem>Email: contato@advocaciaficticia.com</ContactItem>
          <ContactItem>WhatsApp: (11) 98765-4321</ContactItem>
        </Column>
        <Column>
          <Title>Endereço</Title>
          <ContactItem>Rua dos Advogados, 123</ContactItem>
          <ContactItem>São Paulo, SP - 12345-678</ContactItem>
        </Column>
        <Column>
          <Title>Localização</Title>
          <ContactItem>Av. Central, 456 - 2º andar</ContactItem>
          <ContactItem>São Paulo, SP</ContactItem>
        </Column>
      </FooterContent>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com" target="_blank">Facebook</SocialLink>
        <SocialLink href="https://www.linkedin.com" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank">Instagram</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
