import * as React from 'react';
import styled from 'styled-components';

interface DemoCodeProps {
  children: JSX.Element;
}

export const DemoCode = (props: DemoCodeProps) => (
  <StyledDemoCode>{props.children}</StyledDemoCode>
);

const StyledDemoCode = styled.div`
  margin-top: 24px;
  overflow: auto;
`;
