import * as React from 'react';
import styled from 'styled-components';

interface DescriptionProps {
  text: string;
}

export const Description = (props: DescriptionProps) => (
  <StyledDescription>{props.text}</StyledDescription>
);

const StyledDescription = styled.p`
  font-family: 'Sarabun', sans-serif;
  color: #4e4b4b;
  font-size: 16px;
  margin: 24px 0;
`;
