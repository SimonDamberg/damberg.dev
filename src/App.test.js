import { render, screen } from '@testing-library/react';
import App from './App';

test('renders coming soon', () => {
  render(<App />);
  const linkElement = screen.getByText(/coming soon.../i);
  expect(linkElement).toBeInTheDocument();
});
