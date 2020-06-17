import * as React from 'react';

import { Code, DemoContainer, Title } from '../components';

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
    <>
      <Title text={'hhhhhhhh'} />
      <DemoContainer>
        {demoComp}
        {demoCode}
      </DemoContainer>
    </>
  );
};
