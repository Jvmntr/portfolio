import styled, { css } from 'styled-components';

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  background-color: var(--background-primary);
  color: var(--text-primary);
`;

export const SectionTitle = styled.h2`
  font-family: "Fira Code", monospace;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--accent-color);
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  max-width: 1200px;
  gap: 4rem;

   @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
`;

export const CategoryQuadrant = styled.div`
  background-color: var(--background-secondary);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--accent-color);
`;

export const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

interface SkillIconProps {
  isSelected: boolean;
}

export const SkillIcon = styled.img<SkillIconProps>`
  width: 48px;
  height: 48px;
  border: solid 1px var(--accent-color);
  border-radius: 5px;
  background-color: var(--background-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 0.5rem;
  

  img {
    width: 36px;
    height: 36px;
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

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: var(--background-secondary);
      transform: scale(1.15);
      box-shadow: 0 0 15px var(--accent-shadow);
    `}
`;

export const DescriptionContainer = styled.div`
  background-color: transparent;
  border-top: 1px solid var(--text-secondary);
  padding-top: 1rem;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const DescriptionTitle = styled.p`
  font-size: 1.2rem;
  color: var(--accent-color);
  font-weight: 500;
  line-height: 1.5;
`;


export const DescriptionText = styled.p`
  font-size: 0.9rem;
  color: var(--text-primary);
  font-weight: 300;
  line-height: 1.5;
`;

export const PlaceholderText = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-style: italic;
`;