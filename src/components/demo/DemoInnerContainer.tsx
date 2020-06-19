import * as React from 'react';
import styled from 'styled-components';

interface DemoInnerContainerProps {
  children: (JSX.Element | string)[];
}

export const DemoInnerContainer = (props: DemoInnerContainerProps) => (
  <StyledDemoInnerContainer>{props.children}</StyledDemoInnerContainer>
);

const StyledDemoInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
