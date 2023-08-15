import { modalStyles } from 'common/modalStyles'
import { ModalCloseIcon } from 'components/ModalClose'
import React from 'react'
import Modal from 'react-modal'
import { ProfileData } from './ProfileData'
import { User } from 'helpers/types'

type ProfileModalProps = {
  isOpen: boolean
  onClose: () => void
  user: User | null
  error: string
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  user,
}) => {
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
        <ProfileData user={user} />
      </div>
    </Modal>
  )
}
