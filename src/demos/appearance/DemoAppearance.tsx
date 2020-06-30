/* eslint-disable quotes */
import * as React from 'react';

import {
  Code,
  DemoCode,
  DemoComponent,
  DemoContainer,
  DemoInnerContainer,
  Description,
  Title,
} from '../../components';
import { Appearance } from './Appearance';

const data = {
  color: '#5600ff',
  title: 'Appearance & Disappearance',
  description:
    "Items are constantly appearaning and disappearing on the screen these days. Menu, prompts, confirmation dialogues, and similarly fleeting elements usually have some state-based appearance. When testing these components, the trick is to take advantage of RTL's waitFor() utility. This returns a promise resolving to true when the code inside of it no longer throws an error.",
};

export const DemoAppearance = () => {
  const reactCode = `
const Appearance = () => {
  const [showDonut, setShowDonut] = React.useState<boolean>(false);
  return (
    <>
      <button onClick={() => setShowDonut(!showDonut)}>
        {showDonut ? 'Hide Donut' : 'Show Donut'}
      </button>
      {showDonut && (
        <span aria-label='a delicious donut' role='img' data-testid='donut'>
          🍩
        </span>
      )}
    </>
  );
};
  `.trim();
  const testCode = `
describe('<Appearance />', () => {
  test('donut appears and disappears when clicking button', async () => {
    const component = render(<Appearance />);
    const button = component.getByText(/show donut/i);

    // Clicking 'Show Donut' reveals the donut
    fireEvent.click(button);
    const donut = component.getByTestId('donut');
    expect(donut).toBeVisible();

    // Then clicking 'Hide Donut' removes it
    fireEvent.click(button);
    await waitFor(() => {
      expect(donut).not.toBeInTheDocument();
    });
  });
});
`.trim();
  const demoReact = <Code>{reactCode}</Code>;
  const demoTest = <Code>{testCode}</Code>;

  return (
    <DemoContainer>
      <Title color={data.color} text={data.title} />
      <Description text={data.description} />
      <DemoInnerContainer>
        <DemoComponent color={data.color}>
          <Appearance />
        </DemoComponent>
        <DemoCode color={data.color} label={'Code'}>
          {demoReact}
        </DemoCode>
        <DemoCode color={data.color} label={'Test'}>
          {demoTest}
        </DemoCode>
      </DemoInnerContainer>
    </DemoContainer>
  );
};
