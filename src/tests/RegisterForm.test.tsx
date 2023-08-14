import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegisterForm } from 'components/Register/RegisterForm'

describe('RegisterForm', () => {
  it('renders correctly', () => {
    const mockOnSubmit = jest.fn()
    const mockError = ''

    render(<RegisterForm onSubmit={mockOnSubmit} error={mockError} />)

    // Test if input fields and button are rendered
    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const dobInput = screen.getByLabelText('Date of Birth')
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Create Account' })

    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(dobInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('calls onSubmit function on form submission', () => {
    const mockOnSubmit = jest.fn()
    const mockError = ''

    render(<RegisterForm onSubmit={mockOnSubmit} error={mockError} />)

    // Fill out form fields
    const firstNameInput = screen.getByLabelText('First Name')
    const lastNameInput = screen.getByLabelText('Last Name')
    const dobInput = screen.getByLabelText('Date of Birth')
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')

    userEvent.type(firstNameInput, 'John')
    userEvent.type(lastNameInput, 'Doe')
    userEvent.type(dobInput, '2000-01-01')
    userEvent.type(emailInput, 'john@example.com')
    userEvent.type(passwordInput, 'password')

    // Submit the form
    fireEvent.submit(screen.getByTestId('register-form'))

    // Check if the onSubmit function was called
    expect(mockOnSubmit).toHaveBeenCalled()
  })

  // You can add more tests for error rendering, validation, etc.
})
