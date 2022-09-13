import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

