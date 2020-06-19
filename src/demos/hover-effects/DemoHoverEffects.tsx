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
import { HoverEffects } from './HoverEffects';

const data = {
  color: '#5600ff',
  title: 'Hover Effects',
  description:
    'Hovering over buttons often triggers a UI change to help users understand if they have successfully placed their mouse over a target. When testing hover effects, we should assert that the initial state exists, simulate a mouse enter event, assert the UI change, simulate a mouse out event, then re-assert initial UI state.',
};

export const DemoHoverEffects = () => {
  const reactCode = `
const HoverEffects = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);
  return (
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? 'Hovered!' : 'Hover Over Me'}
      </button>
  );
};
  `.trim();
  const testCode = `
describe('<HoverEffects />', () => {
  test('changes text when hovered', () => {
    const component = render(<HoverEffects />);
    const button = component.getByText(/hover over me/i);
    expect(button).toBeVisible();

    fireEvent.mouseEnter(button);
    expect(button.textContent).toMatch(/hovered!/i);

    fireEvent.mouseLeave(button);
    expect(button.textContent).toMatch(/hover over me/i);
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
          <HoverEffects />
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
