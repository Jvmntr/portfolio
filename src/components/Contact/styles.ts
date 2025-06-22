import styled from 'styled-components';

export const ContactContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  background-color: var(--background-primary);
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  max-width: 600px;
  text-align: center;
  margin-bottom: 2.5rem;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
  background-color: var(--background-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px var(--accent-shadow);
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid var(--accent-color);
  background-color: var(--background-secondary);
  color: var(--text-primary);
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px var(--accent-shadow);
  }
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border-radius: 8px;
  border: none;
  background-color: var(--accent-color);
  color: var(--text-primary);
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, filter 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const SuccessMessage = styled.div`
  padding: 2rem;
  border: 2px solid var(--accent-color);
  border-radius: 8px;
  background-color: var(--accent-shadow);
  color: var(--accent-color);
  text-align: center;
  font-size: 1.2rem;
  max-width: 600px;
`;