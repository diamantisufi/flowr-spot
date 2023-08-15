import { modalStyles } from 'common/modalStyles'
import { ModalCloseIcon } from 'components/ModalClose'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { ProfileData } from './ProfileData'

type ProfileModalProps = {
  isOpen: boolean
  onClose: () => void
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const updatedModalStyles = {
    ...modalStyles,
    content: {
      ...modalStyles.content,
      width: '37rem',
    },
  }

  return (
    <Modal
      isOpen={isOpen}
      contentLabel='Login Modal'
      style={updatedModalStyles}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      onRequestClose={onClose}
      ariaHideApp={false}
    >
      <div className='modal-container relative'>
        <ModalCloseIcon onClose={onClose} />
        <ProfileData />
      </div>
    </Modal>
  )
}
