import * as React from 'react';
import styled from 'styled-components';

interface DemoContainerProps {
  children: JSX.Element[];
}

export const DemoContainer = (props: DemoContainerProps) => (
  <StyledDemoContainer>{props.children}</StyledDemoContainer>
);

const StyledDemoContainer = styled.div`
  padding: 0 48px;
`;
