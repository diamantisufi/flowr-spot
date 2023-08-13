import React from 'react'
import { TextInput } from 'components/TextInput'

type RegisterFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
  const status = 'loading'

  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit}>
        <div className="mx-auto flex flex-col items-center justify-center gap-3">
          <div className="flex justify-between gap-[10px] w-full">
            <TextInput
              label="First Name"
              type="email"
              name="email"
              id="email"
              required
              className="w-full"
            />
            <TextInput
              label="Last Name"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <TextInput
            label="Date of Birth"
            type="date"
            name="date"
            id="date"
            required
          />
          <TextInput
            label="Email Address"
            type="email"
            name="email"
            id="email"
            required
          />
          <TextInput
            label="Password"
            type="password"
            name="password"
            id="password"
            minLength={6}
            required
          />
          <button
            type="submit"
            className="button-primary w-full p-5 mt-3 text-white font-ubuntu font-medium"
          >
            {status === 'loading' ? 'Registering...' : 'Login to your Account'}
          </button>
        </div>
      </form>
    </div>
  )
}
