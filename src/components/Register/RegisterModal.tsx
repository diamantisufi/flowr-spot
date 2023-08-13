import React from 'react'
import Modal from 'react-modal'
import { modalStyles } from 'common/modalStyles'
import { RegisterForm } from './RegisterForm'

type LoginModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const RegisterModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Login Modal"
      style={modalStyles}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className="modal-container">
        <h2 className="text-gray font-medium font-ubuntu mb-7">
          Create an Account
        </h2>
      </div>
      <RegisterForm onSubmit={handleSubmit} />
    </Modal>
  )
}
