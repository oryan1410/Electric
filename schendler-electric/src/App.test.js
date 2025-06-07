import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders blog link', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const links = screen.getAllByText(/blog/i);
  expect(links.length).toBeGreaterThan(0);
});
