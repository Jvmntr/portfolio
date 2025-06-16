import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const TypedTextContainer = styled.span`
  display: inline-block;
`;

export const Cursor = styled.span`
  display: inline-block;
  margin-left: 2px;
  animation: ${blink} 1s infinite step-end;
  vertical-align: bottom;
`;