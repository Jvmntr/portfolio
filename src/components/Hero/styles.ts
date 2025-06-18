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
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.25rem;
  }
`;

export const HeroContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  text-align: center;
  z-index: 1;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  position: relative;
  display: inline-block;
  text-align: center;
  margin: 0;
  padding: 2rem 0;

  .desktop-title-wrapper {
    display: inline-block;
    position: relative;
  }

  .background-name {
    position: absolute;
    font-family: 'breathing', cursive;
    font-size: 6rem;
    color: #c72e68; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-12deg);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    z-index: 0;
  }

  .foreground-title {
    position: relative;
    color: var(--text-primary);
    font-family: 'akira', monospace;
    font-size: 2.5rem;
    font-weight: 900;
    z-index: 1;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    .background-name {
      font-size: 4.5rem;
    }
    .foreground-title {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
    .background-name {
      font-size: 3.5rem;
    }
    .foreground-title {
      font-size: 1rem;
    }
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