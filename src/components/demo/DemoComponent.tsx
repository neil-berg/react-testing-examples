import * as React from 'react';
import styled from 'styled-components';

interface DemoComponentProps {
  color: string;
  children: JSX.Element;
}

export const DemoComponent = (props: DemoComponentProps) => (
  <StyledDemoComponent color={props.color}>
    <h3>Demo</h3>
    {props.children}
  </StyledDemoComponent>
);

const StyledDemoComponent = styled.div<{ color: string }>`
  border: 2px ${(props) => props.color} solid;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  position: relative;
  min-width: calc(100% - 48px);

  h3 {
    font-size: 14px;
    color: ${(props) => props.color};
    padding: 0;
    margin: 0;
    background: #fffafa;
    padding: 0 12px;
    position: absolute;
    top: -10px;
    right: 18px;
  }

  @media screen and (min-width: 650px) {
    min-width: 50%;
  }
`;
