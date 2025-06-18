import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 4rem 2rem;
  background-color: var(--background-primary);
  text-align: center;
  transition: background-color 0.3s ease;
  min-height: calc(100vh - 5rem);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
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

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled.div`
  background: var(--background-secondary);
  border-radius: 10px;
  box-shadow: 0 4px 15px var(--box-shadow-dark);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px var(--box-shadow-medium);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid var(--background-secondary);
`;

export const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: left;
`;

export const ProjectTitle = styled.h3`
  font-family: "Fira Code", monospace;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
`;

export const ProjectDescription = styled.p`
  font-family: "Fira Code", monospace;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
  margin-bottom: 1rem;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const ProjectTechnology = styled.span`
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

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

export const ProjectButton = styled.a<{ primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  flex-grow: 1;
  transition: all 0.3s ease;

  background-color: ${(props) => (props.primary ? 'var(--accent-color)' : 'transparent')};
  color: ${(props) => (props.primary ? 'var(--text-inverted)' : 'var(--accent-color)')};
  border: 2px solid var(--accent-color);

  &:hover {
    background-color: var(--accent-color);
    color: var(--text-inverted);
    box-shadow: 0 0 15px var(--accent-shadow);
  }
`;