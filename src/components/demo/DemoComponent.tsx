import * as React from 'react';
import styled from 'styled-components';

interface DemoComponentProps {
  children: JSX.Element;
}

export const DemoComponent = (props: DemoComponentProps) => (
  <StyledDemoComponent>
    <h3>Component</h3>
    {props.children}
  </StyledDemoComponent>
);

const StyledDemoComponent = styled.div`
  border: 2px black solid;
  border-radius: 12px;
  padding: 24px;
  position: relative;
  min-width: calc(100% - 48px);

  h3 {
    padding: 0;
    margin: 0;
    background: white;
    padding: 0 8px;
    position: absolute;
    top: -12px;
    left: 24px;
  }

  @media screen and (min-width: 650px) {
    min-width: 50%;
  }
`;
