import React, { useState } from 'react'
import Modal from 'react-modal'
import { modalStyles } from 'common/modalStyles'
import { RegisterForm } from './RegisterForm'
import { registerUser } from 'services/userService'
import { RegisterResponseData } from 'helpers/types'
import { ModalCloseIcon } from 'components/ModalClose'

type LoginModalProps = {
  isOpen: boolean
  onClose: () => void
  handleRegisterSuccess: () => void
}

export const RegisterModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  handleRegisterSuccess,
}) => {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const formDataString = JSON.stringify(Object.fromEntries(formData))
    const payload = JSON.parse(formDataString)

    setLoading(true)
    await registerUser(payload)
      .then((response: RegisterResponseData | undefined) => {
        if (response?.auth_token) {
          handleRegisterSuccess()
        }
      })
      .catch((error) => {
        setError(error?.response?.data?.error)
      })
      .finally(() => {
        setLoading(false)
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
        <ModalCloseIcon onClose={onClose} />
        <h2 className='text-gray font-medium font-ubuntu mb-7'>
          {error ? 'Error' : 'Create an Account'}
        </h2>
      </div>
      <RegisterForm onSubmit={handleSubmit} error={error} loading={loading} />
    </Modal>
  )
}
