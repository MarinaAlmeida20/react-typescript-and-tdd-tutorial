import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();

  // // Counter1 test with parameters
  // const label1 = screen.getByText(/Other/i);
  // expect(label1).toBeInTheDocument();
  // const counter1 = screen.getByRole(/counter1/i);
  // expect(counter1).toBeInTheDocument();

  // Counter test with parameters
  const label = screen.getByText(/Current/i);
  expect(label).toBeInTheDocument();

  const counter = screen.getByRole(/counter/i);
  expect(counter).toBeInTheDocument();

});

