import React from 'react'
import { Close as CloseIcon } from 'components/Icons/Close'

type ModalCloseProps = {
  onClose: () => void
}

export const ModalCloseIcon: React.FC<ModalCloseProps> = ({ onClose }) => {
  return (
    <div
      className='absolute -right-5 -top-5 text-slate-400 cursor-pointer'
      onClick={() => onClose()}
    >
      <CloseIcon />
    </div>
  )
}
