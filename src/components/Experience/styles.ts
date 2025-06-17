import styled from 'styled-components';

export const ExperienceItemCard = styled.div`
  background-color: var(--background-secondary);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px var(--box-shadow-dark);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px var(--box-shadow-medium);
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
`;

export const ItemTitle = styled.h3`
  font-family: "Fira Code", monospace;
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const ItemCompanyPeriod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
`;

export const ItemCompany = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  font-weight: 500;
  color: var(--accent-color);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const ItemPeriod = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

export const ItemLocation = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--text-secondary);
  margin: 0;
  text-align: right;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

// NOVO COMPONENTE: ItemSummary
export const ItemSummary = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin: 0.5rem 0 1rem 0; /* Margem abaixo do resumo e acima da lista de descrições */

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ItemDescriptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 1rem 0; /* Margem abaixo da lista de descrições */
`;

export const ItemDescription = styled.li`
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--text-secondary);
  margin-bottom: 0.4rem;
  position: relative;
  padding-left: 1.2rem;

  &::before {
    content: '•';
    color: var(--accent-color);
    position: absolute;
    left: 0;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding-left: 1rem;
  }
`;

export const ItemTechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 0.8rem;
`;

export const ItemTechnology = styled.span`
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