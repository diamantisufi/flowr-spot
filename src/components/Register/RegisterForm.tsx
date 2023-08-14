import React from 'react'
import { TextInput } from 'components/TextInput'
import { ErrorComponent } from 'components/Error'

type RegisterFormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  error: string
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  error,
  onSubmit,
}) => {
  return (
    <div className="flex flex-col">
      <form onSubmit={onSubmit}>
        <div className="mx-auto flex flex-col items-center justify-center gap-3">
          <div className="flex justify-between gap-[10px] w-full">
            <TextInput
              label="First Name"
              type="text"
              name="first_name"
              id="first_name"
              required
              className="w-full"
            />
            <TextInput
              label="Last Name"
              type="text"
              name="last_name"
              id="last_name"
              required
            />
          </div>
          <TextInput
            label="Date of Birth"
            type="date"
            name="date_of_birth"
            id="date_of_birth"
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
          {error && <ErrorComponent error={error} />}
          <button
            type="submit"
            className="button-primary w-full p-5 mt-3 text-white font-ubuntu font-medium"
          >
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}
