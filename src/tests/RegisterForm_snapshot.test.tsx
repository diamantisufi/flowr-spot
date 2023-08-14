import { RegisterForm } from 'components/Register/RegisterForm'
import React from 'react'
import renderer from 'react-test-renderer'

describe('RegisterForm Snapshot', () => {
  it('matches snapshot', () => {
    const mockOnSubmit = jest.fn()
    const mockError = ''

    const tree = renderer
      .create(
        <RegisterForm
          onSubmit={mockOnSubmit}
          error={mockError}
          loading={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
