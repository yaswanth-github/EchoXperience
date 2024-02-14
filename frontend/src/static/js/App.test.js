import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main content', () => {
  render(<App />);
  const mainContent = screen.getByText(/Gain Real-World Experience with EchoXperience/i);
  expect(mainContent).toBeInTheDocument();
});
