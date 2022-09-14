import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';
// import userEvent from '@testing-library/user-event';

test('should render a label and counter', () => {
    const handler = jest.fn();

    render(<Counter count={0} onCounterIncrease={handler} />);
    const label = screen.getByText(/Count/i);
    expect(label).toBeInTheDocument();
    const counter = screen.getByRole(/counter/i);
    expect(counter).toBeInTheDocument();
});

test('should render a counter with a custom label', () => {
    const handler = jest.fn();


    render(<Counter label={`Current`} count={0} onCounterIncrease={handler} />);
    const label = screen.getByText(/Current/i);
    expect(label).toBeInTheDocument();
    const counter = screen.getByRole(/counter/i);
    expect(counter).toBeInTheDocument();
});

// test('should start at zero', () => {
//     render(<Counter />);
//     const counter = screen.getByRole(/counter/i);
//     expect(counter).toHaveTextContent("0");
// });

// test('should increment count by one', () => {
//     render(<Counter />);
//     const counter = screen.getByRole(/counter/i);
//     expect(counter).toHaveTextContent("0");

//     // click button
//     fireEvent.click(counter)
//     expect(counter).toHaveTextContent("1");

// });

test('should increment count by ten', () => {
    const handler = jest.fn();

    render(<Counter count={0} onCounterIncrease={handler} />);
    const counter = screen.getByRole(/counter/i);

    // click button
    fireEvent.click(counter)
    expect(handler).toBeCalledWith(false);

});