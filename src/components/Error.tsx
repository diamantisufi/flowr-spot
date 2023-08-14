import React from 'react'

type ErrorProps = {
  error: string
}

export const ErrorComponent: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className='flex justify-center items-center flex-col text-gray font-ubuntu bg-red-50 rounded p-2'>
      <span className='text-red-400 text-xs '>{error}</span>
    </div>
  )
}
