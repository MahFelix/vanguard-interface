import styled from "styled-components";

const FormSection = styled.section`
  background-color: #d9d9d9;
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho do título em telas menores */
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555555;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Reduz o tamanho do subtítulo em telas menores */
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column; /* Empilha os inputs em telas menores */
    gap: 1.5rem;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #717171;
  border-radius: 5px;
  background-color: #717171;
  color: #ffffff;
  outline: none;
  flex: 1;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    border-color: #f29f05;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #717171;
  border-radius: 5px;
  background-color: #717171;
  color: #ffffff;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f29f05;
  }
`;

const MessageInput = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #717171;
  border-radius: 5px;
  background-color: #717171;
  color: #ffffff;
  outline: none;
  width: 100%;
  height: 100px;
  resize: none;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #ffffff;
  }

  &:focus {
    border-color: #f29f05;
  }
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #283040;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d88c05;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Ajusta o tamanho do botão em telas menores */
  }
`;

const ContactForm = () => {
  return (
    <FormSection>
      <Title>ENTRE EM CONTATO</Title>
      <Subtitle>
        A lei é complicada e pode lhe causar um grande problema! Deixe-nos
        ajudá-lo!
      </Subtitle>
      <Form>
        <InputGroup>
          <Input type="text" placeholder="Nome*" required />
          <Input type="tel" placeholder="Telefone*" required />
        </InputGroup>
        <InputGroup>
          <Input type="email" placeholder="Email*" required />
          <Select required>
            <option value="">Selecione uma área de direito</option>
            <option value="previdenciario">Direito Previdenciário</option>
            <option value="trabalhista">Direito Trabalhista</option>
            <option value="civil">Direito Civil</option>
            <option value="penal">Direito Penal</option>
            <option value="familia">Direito de Família</option>
            <option value="tributario">Direito Tributário</option>
          </Select>
        </InputGroup>
        <MessageInput placeholder="Mensagem*" required />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </FormSection>
  );
};

export default ContactForm;
