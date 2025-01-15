import { useForm } from "react-hook-form";
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
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  color: #555555;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
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
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333333;
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #717171;
  border-radius: 5px;
  background-color: #f4f4f4;
  color: #333333;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #f29f05;
  }
`;

const Select = styled.select`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #717171;
  border-radius: 5px;
  background-color: #f4f4f4;
  color: #333333;
  outline: none;

  &:focus {
    border-color: #f29f05;
  }
`;

const MessageInput = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #717171;
  border-radius: 5px;
  background-color: #f4f4f4;
  color: #333333;
  outline: none;
  resize: none;

  &:focus {
    border-color: #f29f05;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.9rem;
  color: #d9534f;
`;

const SubmitButton = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #214285;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d88c05;
  }
`;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Formulário enviado com sucesso!");
  };

  return (
    <FormSection id="contact">
      <Title>ENTRE EM CONTATO</Title>
      <Subtitle>
        A lei é complicada e pode lhe causar um grande problema! Deixe-nos ajudá-lo!
      </Subtitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label htmlFor="name">Nome:</Label>
          <Input
            id="name"
            type="text"
            {...register("name", { required: "O nome é obrigatório." })}
            placeholder="Nome*"
          />
          {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="phone">Telefone:</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone", { required: "O telefone é obrigatório." })}
            placeholder="Telefone*"
          />
          {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: "O email é obrigatório.",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Insira um email válido.",
              },
            })}
            placeholder="Email*"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="area">Área de Direito:</Label>
          <Select
            id="area"
            {...register("area", { required: "Selecione uma área de direito." })}
          >
            <option value="">Selecione uma área de direito</option>
            <option value="previdenciario">Direito Previdenciário</option>
            <option value="trabalhista">Direito Trabalhista</option>
            <option value="civil">Direito Civil</option>
            <option value="penal">Direito Penal</option>
            <option value="familia">Direito de Família</option>
            <option value="tributario">Direito Tributário</option>
          </Select>
          {errors.area && <ErrorMessage>{errors.area.message}</ErrorMessage>}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="message">Mensagem:</Label>
          <MessageInput
            id="message"
            {...register("message", { required: "A mensagem é obrigatória." })}
            placeholder="Digite sua mensagem*"
          />
          {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
        </InputGroup>

        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
    </FormSection>
  );
};

export default ContactForm;
