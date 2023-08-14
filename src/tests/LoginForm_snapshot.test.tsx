import { LoginForm } from 'components/Login/LoginForm'
import React from 'react'
import renderer from 'react-test-renderer'

describe('RegisterForm Snapshot', () => {
  it('matches snapshot', () => {
    const mockOnSubmit = jest.fn()
    const mockError = ''

    const tree = renderer
      .create(
        <LoginForm onSubmit={mockOnSubmit} error={mockError} loading={false} />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
