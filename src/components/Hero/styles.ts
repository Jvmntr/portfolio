import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 5rem);
  background-color: var(--background-primary); 
  color: var(--text-primary); 
  text-align: center;
  padding: 4rem 2rem;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    min-height: calc(100vh - 5rem);
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem;
    min-height: calc(100vh - 5rem);
  }
`;

export const HeroContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  z-index: 1;
`;

export const HeroTitle = styled.h1`
  font-family: "Fira Code", monospace;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-primary); 
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.7rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 1.3rem;
  font-weight: 400;
  color: var(--text-secondary); 
  margin: 0;
  max-width: 700px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 0 1rem;
    box-sizing: border-box;
  }
`;

const BaseHeroButton = styled.a`
  font-family: "Fira Code", monospace;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem 1.8rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
    min-width: unset;
  }
`;

export const HeroButton = styled(BaseHeroButton)`
  background-color: var(--accent-color); 
  color: var(--text-inverted); 
  border: 2px solid var(--accent-color); 

  &:hover {
    filter: brightness(1.1);
    box-shadow: 0 6px 20px var(--accent-shadow); 
    transform: translateY(-2px);
  }
`;

export const HeroButtonOutline = styled(BaseHeroButton)`
  background-color: transparent;
  color: var(--accent-color); 
  border: 2px solid var(--accent-color); 

  &:hover {
    background-color: var(--accent-color); 
    color: var(--text-inverted); 
    box-shadow: 0 6px 20px var(--accent-shadow); 
    transform: translateY(-2px);
  }
`;