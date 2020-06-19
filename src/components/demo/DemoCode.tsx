import * as React from 'react';
import styled from 'styled-components';

interface DemoCodeProps {
  color: string;
  label: string;
  children: JSX.Element;
}

export const DemoCode = (props: DemoCodeProps) => (
  <StyledDemoCode color={props.color}>
    <h3>{props.label}</h3>
    {props.children}
  </StyledDemoCode>
);

const StyledDemoCode = styled.div<{ color: string }>`
  overflow: auto;
  position: relative;
  margin-top: 24px;

  h3 {
    position: absolute;
    top: -6px;
    right: 24px;
    background: #fffafa;
    padding: 5px 10px;
    border-radius: 4px;
    color: ${(props) => props.color};
  }

  > * {
    font-size: 14px;
  }
`;
