// src/components/Counter.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';


describe('Counter Component', () => {
  test('renders initial count of 0', () => {
    render(<Counter/>);
    const countElement = screen.getByText(/Count:/i);
    expect(countElement).toHaveTextContent('Count: 0');
  });

  test('increments the count when the Increment button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    const countElement = screen.getByText(/Count:/i);
    expect(countElement).toHaveTextContent('Count: 1');
  });

  test('decrements the count when the Decrement button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/Count:/i);
    expect(countElement).toHaveTextContent('Count: -1');
  });
});