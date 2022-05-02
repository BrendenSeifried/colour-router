import { render, screen } from '@testing-library/react';
import App from './App';

describe('Color Router', () => {
  it('displays the r/g/b values from the route path as the background color', () => {
    // Render the app to the "screen"
    render(<App />);

    // Find & check the label on the page lists the current color
    let label = screen.getByText(/rgb\(\d+,\d+,\d+\)/i);
    expect(label.innerHTML).toEqual('rgb(192,192,192)');

    // Find & click the "Crimson" link to navigate to the next page:
    const crimson = screen.getByText(/crimson/i);
    crimson.click();

    // Check that the label updated its values to match the "crimson" color:
    label = screen.getByText(/rgb\(\d+,\d+,\d+\)/i);
    expect(label.innerHTML).toEqual('rgb(220,20,60)');

    // Find & click the "Purple" link to navigate to the next page:
    const purple = screen.getByText(/purple/i);
    purple.click();

    // Check that the label updated its values to match the "purple" color:
    label = screen.getByText(/rgb\(\d+,\d+,\d+\)/i);
    expect(label.innerHTML).toEqual('rgb(147,112,219)');
  });
});
