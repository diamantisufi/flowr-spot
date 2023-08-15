import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from 'components/Login/LoginForm'

describe('LoginForm', () => {
  it('renders correctly', () => {
    const mockOnSubmit = jest.fn()
    const mockError = ''

    render(
      <LoginForm onSubmit={mockOnSubmit} error={mockError} loading={false} />
    )

    // Test if input fields and button are rendered
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', {
      name: 'Login to your Account',
    })

    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('calls onSubmit function on form submission', () => {
    const mockOnSubmit = jest.fn()
    const mockError = ''

    render(
      <LoginForm onSubmit={mockOnSubmit} error={mockError} loading={false} />
    )
    // Fill out form fields
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')

    userEvent.type(emailInput, 'test@example.com')
    userEvent.type(passwordInput, 'password')

    // Submit the form
    fireEvent.submit(screen.getByTestId('login-form'))

    // Check if the onSubmit function was called
    expect(mockOnSubmit).toHaveBeenCalled()
  })

  // You can add more tests for different scenarios, loading status, error handling, etc.
})
