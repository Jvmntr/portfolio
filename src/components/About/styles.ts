import styled from 'styled-components';

export const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 5rem);
  padding: 5rem 2rem;
  background-color: var(--background-primary);
  color: var(--text-primary);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 1rem;
  }
`;

export const AboutCard = styled.div`
  max-width: 900px; 
  width: 100%;
  background-color: var(--background-secondary);
  border-radius: 12px;
  box-shadow: 0 10px 20px var(--box-shadow-medium);
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2rem;
  padding: 1.6rem; 
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    gap: 2rem;
    justify-items: center;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const AboutImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 900px) {
    max-width: 250px;
  }

  @media (max-width: 480px) {
    max-width: 200px;
  }
`;

export const AboutImage = styled.img`
  width: 75%;
  height: 75%;
  object-fit: cover;
  display: block;
  border-radius: 15px;
`;

export const AboutTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 1.4rem;

  @media (max-width: 900px) {
    align-items: center;
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  font-family: "Fira Code", monospace;
  font-size: 2.2rem; 
  font-weight: 700;
  color: var(--accent-color); 
  margin-top: 0;
  margin-bottom: 0; 

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const AboutName = styled.h3`
  font-family: "Fira Code", monospace;
  font-size: 1.6rem; 
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const AboutRole = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 1rem; 
  font-weight: 500;
  color: var(--text-secondary);
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const AboutText = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const AboutStack = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--accent-color);
  margin: 0;
  max-width: 700px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
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
    filter: invert(100%);
    transition: filter 0.3s ease-in-out;
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