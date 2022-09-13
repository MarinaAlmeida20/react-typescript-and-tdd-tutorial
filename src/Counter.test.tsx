import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

test('should render a label and counter', () => {
    render(<Counter />);
    const label = screen.getByText(/Count/i);
    expect(label).toBeInTheDocument();
    const counter = screen.getByRole(/counter/i);
    expect(counter).toBeInTheDocument();
});

test('should render a counter with a custom label', () => {
    render(<Counter label={`Current`} />);
    const label = screen.getByText(/Current/i);
    expect(label).toBeInTheDocument();
    const counter = screen.getByRole(/counter/i);
    expect(counter).toBeInTheDocument();
});