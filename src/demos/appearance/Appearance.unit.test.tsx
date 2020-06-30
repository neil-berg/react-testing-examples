import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Appearance } from './Appearance';

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
