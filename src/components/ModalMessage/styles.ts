import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

export const ModalContent = styled.div<{ $type: 'success' | 'error' }>`
  background: var(--background-primary);
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 5px 15px var(--box-shadow-dark);
  position: relative;
  width: 100%;
  max-width: 450px;
  text-align: center;
  border-top: 5px solid ${({ $type }) => ($type === 'success' ? 'var(--accent-color)' : 'var(--accent-shadow)')};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 2.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  line-height: 1;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: var(--text-primary);
  }
`;

export const IconWrapper = styled.div<{ $type: 'success' | 'error' }>`
  margin-bottom: 1rem;
  color: ${({ $type }) => ($type === 'success' ? 'var(--accent-color)' : 'var(--accent-shadow)')};
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
`;

export const ModalMessage = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
  margin: 0;
`;