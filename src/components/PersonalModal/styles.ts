import styled, { createGlobalStyle } from 'styled-components';

interface ModalContainerProps {
  isOpen: boolean;
}

export const GlobalStyle = createGlobalStyle<{ lockScroll: boolean }>`
  body {
    overflow: ${({ lockScroll }) => (lockScroll ? 'hidden' : 'auto')};
  }
`;

export const ModalOverlay = styled.div<ModalContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled.div`
  background: var(--background-primary);
  color: var(--text-primary);
  padding: 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 5px 20px var(--box-shadow-medium);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  max-height: 85vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--background-secondary);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 10px;
    border: 2px solid var(--background-secondary);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: var(--accent-color);
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--accent-color);
  margin-top: 0;
  border-bottom: 2px solid var(--accent-color);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

export const Summary = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-secondary);
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
`;

export const Tag = styled.span`
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  font-weight: 500;
  background-color: var(--background-primary);
  color: var(--accent-color);
  padding: 0.4rem 0.7rem;
  border-radius: 5px;
  border: 1px solid var(--accent-color);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: var(--accent-color);
    color: var(--text-inverted);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  padding: 1rem;
  background: var(--background-secondary);
  border: 1px solid var(--accent-color);
  border-radius: 8px;
`;

export const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: solid 1px var(--accent-color);
  background-color: var(--background-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  
  img {
    width: 24px;
    height: 24px;
    object-fit: contain; 
  }

  &:hover {
    background-color: var(--accent-shadow);
    transform: translateY(-3px);

    img {
      filter: invert(0%);
    }
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;