import * as React from 'react';

import {
  Code,
  DemoCode,
  DemoComponent,
  DemoContainer,
  DemoInnerContainer,
  Description,
  Title,
} from '../components';

const data = {
  title: 'Test Demo Title',
  description: 'Looking at a scneario where we dot dot dot',
};

export const TestDemo = () => {
  const demoComp = <button>Press Me</button>;
  const code = `
const foo = 'foo';
const bar = 'bar';
console.log(foo + bar);
const component = render(<SomeComponent props={testProps} />)
const button = component.getByText(/some text/)
`.trim();
  const demoCode = <Code>{code}</Code>;

  return (
    <DemoContainer>
      <Title text={data.title} />
      <Description text={data.description} />
      <DemoInnerContainer>
        <DemoComponent>{demoComp}</DemoComponent>
        <DemoCode>{demoCode}</DemoCode>
      </DemoInnerContainer>
    </DemoContainer>
  );
};
