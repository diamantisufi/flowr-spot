import React from 'react'
import Modal from 'react-modal'
import { modalStyles } from 'common/modalStyles'

type SuccessModalProps = {
  isOpen: boolean
  content: string
  onClose: () => void
  onActionClick: () => void
}
export const SuccessModal: React.FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  onActionClick,
  content,
}) => {
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
      <div className="modal-container p-5 text-center">
        <p className="text-gray font-medium font-montserrat text-base">
          {content}
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <button
          className="button-primary py-5 px-9 w-1/2"
          onClick={() => onActionClick()}
        >
          Done
        </button>
      </div>
    </Modal>
  )
}
