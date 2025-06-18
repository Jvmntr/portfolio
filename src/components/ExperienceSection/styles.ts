import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  
  padding: 5rem 2rem;
  background-color: var(--background-primary);
  color: var(--text-primary);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const ExperienceContent = styled.div`
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 5rem);
  gap: 3rem;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-family: "Fira Code", monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export const ExperienceList = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  > * {
    flex-shrink: 0;
    width: 100%;
    scroll-snap-align: start;
  }
`;

export const CarouselControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) { 
    display: none;
  }
`;

export const CarouselButton = styled.button`
  background-color: var(--accent-color);
  color: var(--text-inverted);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    box-shadow: 0 4px 8px var(--accent-shadow);
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: var(--background-secondary);
    color: var(--text-secondary);
    cursor: not-allowed;
    opacity: 0.6;
  }
`;