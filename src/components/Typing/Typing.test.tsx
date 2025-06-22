import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';

import TypingText from './index';

describe('Componente TypingText', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('deve digitar o texto caractere por caractere na velocidade padrão', () => {
    const text = 'Olá';
    const typingSpeed = 70;
    render(<TypingText text={text} />);

    expect(screen.queryByText(text)).not.toBeInTheDocument();
    expect(screen.queryByText('|')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(typingSpeed);
    });
    expect(screen.getByText('O')).toBeInTheDocument();
    expect(screen.getByText('|')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(typingSpeed);
    });
    expect(screen.getByText('Ol')).toBeInTheDocument();

    act(() => {
        jest.advanceTimersByTime(typingSpeed);
    });
    expect(screen.getByText('Olá')).toBeInTheDocument();
  });

  it('deve respeitar a prop typingSpeed customizada', () => {
    const text = 'Rápido';
    const typingSpeed = 20;
    render(<TypingText text={text} typingSpeed={typingSpeed} />);

    act(() => {
      jest.advanceTimersByTime(typingSpeed);
    });
    expect(screen.getByText('R')).toBeInTheDocument();
  });

  it('deve respeitar a prop startDelay antes de começar a digitar', () => {
    const text = 'Atrasado';
    const startDelay = 500;
    const typingSpeed = 70;
    render(<TypingText text={text} startDelay={startDelay} />);

    act(() => {
      jest.advanceTimersByTime(startDelay - 1);
    });
    expect(screen.queryByText(text)).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1);
    });

    act(() => {
      jest.advanceTimersByTime(typingSpeed);
    });
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('deve reiniciar a animação quando a prop loop for true', () => {
    const text = 'Fim';
    const typingSpeed = 70;
    const loopDelay = 3000;
    render(<TypingText text={text} loop={true} />);

    for (let i = 0; i < text.length; i++) {
      act(() => {
        jest.advanceTimersByTime(typingSpeed);
      });
    }
    expect(screen.getByText('Fim')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(loopDelay - 1);
    });
    expect(screen.getByText('Fim')).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(screen.queryByText('Fim')).not.toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(typingSpeed);
    });
    expect(screen.getByText('F')).toBeInTheDocument();
  });

  it('deve limpar os timers quando o componente for desmontado para evitar memory leaks', () => {
    const clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
    
    const { unmount } = render(<TypingText text="Teste" />);

    act(() => {
      jest.advanceTimersByTime(1);
    });
    
    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    
    clearTimeoutSpy.mockRestore();
  });
});