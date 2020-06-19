import * as React from 'react';
import styled from 'styled-components';

export const HoverEffects = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  return (
    <StyledHoverEffects isHovered={isHovered}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? 'Hovered!' : 'Hover Over Me'}
      </button>
    </StyledHoverEffects>
  );
};

const StyledHoverEffects = styled.div<{ isHovered: boolean }>`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    padding: 10px 20px;
    border: 2px #011627 solid;
    border-radius: 8px;
    width: 185px;
    background-color: ${(props) => (props.isHovered ? '#011627' : '#dffbf6')};
    color: ${(props) => (props.isHovered ? '#dffbf6' : '#011627')};
    transition: all 0.05s linear;
  }
`;
