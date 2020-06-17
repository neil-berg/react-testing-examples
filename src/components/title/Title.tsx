import * as React from 'react';
import styled from 'styled-components';

interface TitleProps {
  text: string;
}

export const Title = (props: TitleProps) => (
  <StyledTitle>{props.text}</StyledTitle>
);

const StyledTitle = styled.h1`
  color: red;
`;
