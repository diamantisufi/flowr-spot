import React from 'react'
import Modal from 'react-modal'
import { modalStyles } from 'common/modalStyles'
import { ModalCloseIcon } from './ModalClose'

type SuccessModalProps = {
  isOpen: boolean
  content: string
  onClose: () => void
  onActionClick: () => void
  onProfileClick?: () => void
  hasProfileButton?: boolean
  className?: string
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  onActionClick,
  onProfileClick,
  content,
  hasProfileButton,
  className,
}) => {
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
      <div className='modal-container p-5 text-center relative'>
        <ModalCloseIcon onClose={onClose} />
        <p className='text-gray font-medium font-montserrat text-base'>
          {content}
        </p>
      </div>
      <div className={`flex justify-center items-center mt-5 ${className}`}>
        <button
          className='button-primary py-4 px-9 w-1/2'
          onClick={() => onActionClick()}
        >
          Done
        </button>

        {hasProfileButton && (
          <button
            className='button-primary py-4 px-9 w-1/2'
            onClick={() => onProfileClick && onProfileClick()}
          >
            Profile
          </button>
        )}
      </div>
    </Modal>
  )
}
