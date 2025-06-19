import React from 'react';
import { 
  ModalOverlay, 
  ModalContent, 
  CloseButton, 
  IconWrapper, 
  ModalTitle,
  ModalMessage 
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  message: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, type, message }) => {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const title = type === 'success' ? 'Sucesso!' : 'Ocorreu um Erro';
  const icon = type === 'success' 
    ? <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    : <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent $type={type}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <IconWrapper $type={type}>{icon}</IconWrapper>
        <ModalTitle>{title}</ModalTitle>
        <ModalMessage>{message}</ModalMessage>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;