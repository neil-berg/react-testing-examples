import * as React from 'react';
import styled from 'styled-components';

interface DemoContainerProps {
  children: (JSX.Element | string)[];
}

export const DemoContainer = (props: DemoContainerProps) => (
  <StyledDemoContainer>{props.children}</StyledDemoContainer>
);

const StyledDemoContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 650px) {
    flex-direction: row;
  }
`;
