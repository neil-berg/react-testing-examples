import * as React from 'react';
import styled from 'styled-components';

interface DescriptionProps {
  text: string;
}

export const Description = (props: DescriptionProps) => (
  <StyledDescription>{props.text}</StyledDescription>
);

const StyledDescription = styled.p`
  color: green;
`;
