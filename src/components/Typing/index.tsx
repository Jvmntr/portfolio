import React, { useState, useEffect } from 'react';
import { TypedTextContainer, Cursor } from './styles';

interface TypingTextProps {
  text: string;
  typingSpeed?: number;
  startDelay?: number;
  loop?: boolean;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  typingSpeed = 70,
  startDelay = 0,
  loop = false,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingInitiated, setTypingInitiated] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let loopTimer: NodeJS.Timeout;

    if (!typingInitiated && startDelay > 0) {
      timer = setTimeout(() => {
        setTypingInitiated(true);
      }, startDelay);
      return () => clearTimeout(timer);
    }

    if (typingInitiated || startDelay === 0) {
      if (currentIndex < text.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, typingSpeed);
      } else if (loop) {
        loopTimer = setTimeout(() => {
          setDisplayedText('');
          setCurrentIndex(0);
          setTypingInitiated(false);
        }, 3000);
      }
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(loopTimer);
    };
  }, [currentIndex, displayedText, text, typingSpeed, startDelay, loop, typingInitiated]);

  const shouldShowCursor = displayedText.length > 0 || (typingInitiated && currentIndex < text.length);

  return (
    <TypedTextContainer>
      {displayedText}
      {shouldShowCursor && <Cursor>|</Cursor>}
    </TypedTextContainer>
  );
};

export default TypingText;