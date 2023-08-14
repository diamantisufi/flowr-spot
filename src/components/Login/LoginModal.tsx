import React, { useState } from 'react'
import Modal from 'react-modal'
import { LoginForm } from './LoginForm'
import { modalStyles } from 'common/modalStyles'
import { loginUser } from 'services/userService'
import { LoginResponseData } from 'helpers/types'

type LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  handleLoginSuccess: () => void
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  handleLoginSuccess,
}) => {
  const [error, setError] = useState<string>('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const formDataString = JSON.stringify(Object.fromEntries(formData))
    const payload = JSON.parse(formDataString)

    await loginUser(payload)
      .then((response: LoginResponseData | undefined) => {
        if (response?.auth_token) {
          handleLoginSuccess()
        }
      })
      .catch((error) => {
        setError(error?.response?.data?.error)
      })
  }

  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Login Modal'
      style={modalStyles}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className='modal-container'>
        <h2 className='text-gray font-medium font-ubuntu mb-7'>
          {error ? 'Error' : 'Welcome Back'}
        </h2>
      </div>
      <LoginForm onSubmit={handleSubmit} />
    </Modal>
  )
}
