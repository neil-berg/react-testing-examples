import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { HoverEffects } from './HoverEffects';

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
