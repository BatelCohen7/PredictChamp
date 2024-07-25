import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

describe('LoginForm', () => {
  test('renders LoginForm and submits data', async () => {
    const mockOnLoginSuccess = jest.fn();
    render(<LoginForm onLoginSuccess={mockOnLoginSuccess} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    fireEvent.click(submitButton);

    // Add a short delay to wait for the async login process to complete
    await new Promise(r => setTimeout(r, 500));

    expect(mockOnLoginSuccess).toHaveBeenCalledTimes(1);
  });

  test('shows error message on invalid credentials', async () => {
    render(<LoginForm onLoginSuccess={jest.fn()} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    fireEvent.click(submitButton);

    // Add a short delay to wait for the async login process to complete
    await new Promise(r => setTimeout(r, 500));

    const errorMessage = screen.getByText(/invalid credentials/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
