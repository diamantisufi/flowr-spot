import { ErrorComponent } from 'components/Error'
import { TextInput } from 'components/TextInput'
import React from 'react'

type LoginFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  error: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ error, onSubmit }) => {
  const status = 'loading'

  return (
    <div className='flex flex-col'>
      <form onSubmit={onSubmit} data-testid='login-form'>
        <div className='mx-auto flex flex-col items-center justify-center gap-3'>
          <TextInput
            label='Email Address'
            type='email'
            name='email'
            id='email'
            required
          />
          <TextInput
            type='password'
            name='password'
            id='password'
            minLength={6}
            required
            label='Password'
          />
          {error && <ErrorComponent error={error} />}
          <button
            type='submit'
            className='button-primary w-full p-5 mt-3 text-white font-ubuntu font-medium'
          >
            Login to your Account
          </button>
        </div>
      </form>
    </div>
  )
}
