import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';

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

test('should start at zero', () => {
    render(<Counter />);
    const counter = screen.getByRole(/counter/i);
    expect(counter).toHaveTextContent("0");
});

test('should increment count by one', () => {
    render(<Counter />);
    const counter = screen.getByRole(/counter/i);
    expect(counter).toHaveTextContent("0");

    // click button
    fireEvent.click(counter)
    expect(counter).toHaveTextContent("1");

});

test('should increment count by ten', () => {
    render(<Counter />);
    const counter = screen.getByRole(/counter/i);
    expect(counter).toHaveTextContent("0");

    // click button
    userEvent.click(counter, { shiftKey: true })
    expect(counter).toHaveTextContent("10");

});