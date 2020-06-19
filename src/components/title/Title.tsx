import * as React from 'react';
import styled from 'styled-components';

interface TitleProps {
  color: string;
  text: string;
}

export const Title = (props: TitleProps) => (
  <StyledTitle color={props.color}>{props.text}</StyledTitle>
);

const StyledTitle = styled.h1<{ color: string }>`
  color: ${(props) => props.color};
  font-family: 'Sarabun', sans-serif;
  font-size: 32px;
  margin-top: 64px;
`;
