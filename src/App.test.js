import { render, screen } from '@testing-library/react';
import App from './App';

test('renders intro text', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hi, my name is/i);
  expect(headerElement).toBeInTheDocument();
});
