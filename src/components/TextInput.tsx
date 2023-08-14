import React from 'react'

type TextInputProps = {
  name: string
  type: string
  id: string
  minLength?: number
  required?: boolean
  className?: string
  label?: string
}

export const TextInput: React.FC<TextInputProps> = ({
  name,
  type,
  id,
  minLength,
  required,
  label,
  className,
}): JSX.Element => {
  return (
    <div className='relative rounded flex flex-col w-full h-full border border-inputBorder bg-inputBackground hover:border-slate-300 transition-colors text-[13px]'>
      <label
        htmlFor={name}
        className='absolute top-2 text-[10px] text-secondary ml-4'
      >
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={id}
        minLength={minLength}
        required={!!required}
        className={
          `outline-none h-full w-full bg-transparent text-gray p-4 pt-7 ` +
          className
        }
      />
    </div>
  )
}
