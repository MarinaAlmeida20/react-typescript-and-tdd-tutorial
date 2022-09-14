import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter1 from './Counter1';
import userEvent from '@testing-library/user-event';

test('should render a label and counter', () => {
    render(<Counter1 />);
    const label = screen.getByText(/Count/i);
    expect(label).toBeInTheDocument();
    const counter = screen.getByRole(/counter/i);
    expect(counter).toBeInTheDocument();
});

test('should render a counter with a custom label', () => {
    render(<Counter1 label1={`Current1`} />);
    const label1 = screen.getByText(/Current1/i);
    expect(label1).toBeInTheDocument();
    const counter1 = screen.getByRole(/counter1/i);
    expect(counter1).toBeInTheDocument();
});

test('should start at zero', () => {
    render(<Counter1 />);
    const counter1 = screen.getByRole(/counter1/i);
    expect(counter1).toHaveTextContent("0");
});

test('should increment count by one', () => {
    render(<Counter1 />);
    const counter1 = screen.getByRole(/counter1/i);
    expect(counter1).toHaveTextContent("0");

    // click button
    fireEvent.click(counter1)
    expect(counter1).toHaveTextContent("1");

});

test('should increment count by ten', () => {
    render(<Counter1 />);
    const counter1 = screen.getByRole(/counter1/i);
    expect(counter1).toHaveTextContent("0");

    // click button
    userEvent.click(counter1, { shiftKey: true })
    expect(counter1).toHaveTextContent("10");

});