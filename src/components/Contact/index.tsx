import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Modal from '../ModalMessage';
import {
  ContactContainer,
  Title,
  Description,
  StyledForm,
  Label,
  Input,
  TextArea,
  Button,
} from './styles';

const Contact = () => {
  const formId = process.env.REACT_APP_FORMSPREE_ID;
  const [state, handleSubmit, reset] = useForm(formId || "");
  
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'success' as 'success' | 'error',
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null);
  const prevSubmitting = useRef(false);

  useEffect(() => {
    if (prevSubmitting.current && !state.submitting) {
      if (state.succeeded) {
        setModalState({
          isOpen: true,
          type: 'success',
          message: 'Sua mensagem foi enviada com sucesso. Responderei em breve!'
        });
        formRef.current?.reset();
      }
      
      if (state.errors) {
        setModalState({
          isOpen: true,
          type: 'error',
          message: 'Houve um problema ao enviar sua mensagem. Por favor, verifique os campos e tente novamente.'
        });
      }
    }

    prevSubmitting.current = state.submitting;

  }, [state.submitting, state.succeeded, state.errors]);


  if (!formId) {
    return (
      <ContactContainer id="contato">
        <Title>Erro de Configuração</Title>
        <Description>O formulário de contato não pôde ser carregado.</Description>
      </ContactContainer>
    );
  }

  const handleCloseModal = () => {
    setModalState({ ...modalState, isOpen: false });
    reset();
  };
  
  return (
    <>
      <ContactContainer id="contato">
        <Title>Entre em Contato</Title>
        <Description>
          Estou aberto a novas oportunidades e colaborações. Preencha o formulário
          abaixo e vamos conversar!
        </Description>
        <StyledForm ref={formRef} onSubmit={handleSubmit}>
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" name="name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Label htmlFor="subject">Assunto</Label>
          <Input id="subject" type="text" name="subject" required />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
          
          <Label htmlFor="message">Mensagem</Label>
          <TextArea id="message" name="message" rows={5} required />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
          
          <Button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </StyledForm>
      </ContactContainer>
      
      <Modal 
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        message={modalState.message}
      />
    </>
  );
};

export default Contact;