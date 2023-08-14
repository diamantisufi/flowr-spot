import React, { useContext } from 'react'
import { Header } from 'components/Header/Header'
import { Homepage } from 'views/HomePage'
import { store } from 'store'
import modalAction from 'store/actions/modalAction'
import { ActiveModal } from 'helpers/types'
import { LoginModal } from 'components/Login/LoginModal'
import { RegisterModal } from 'components/Register/RegisterModal'
import { SuccessModal } from 'components/SuccessModal'

export const Layout: React.FC = () => {
  const context = useContext(store)
  const dispatch = context?.dispatch
  const state = context?.state

  if (!dispatch) {
    return null
  }

  const handleModalClose = () => {
    dispatch(modalAction(null))
  }

  const handleRegisterFlow = () => {
    dispatch(modalAction(null))
    dispatch(modalAction(ActiveModal.LOGIN))
  }

  const handleRegisterSuccess = () => {
    dispatch(modalAction(null))
    dispatch(modalAction(ActiveModal.REGISTER_SUCCESS))
  }

  return (
    <>
      <div className="flex flex-col">
        <Header />
        <Homepage />
      </div>

      {/* Modal handlers */}
      {state?.activeModal === ActiveModal.LOGIN && (
        <LoginModal isOpen onClose={handleModalClose} />
      )}
      {state?.activeModal === ActiveModal.REGISTER && (
        <RegisterModal
          isOpen
          onClose={handleModalClose}
          handleRegisterSuccess={handleRegisterSuccess}
        />
      )}
      {state?.activeModal === ActiveModal.REGISTER_SUCCESS && (
        <SuccessModal
          isOpen
          content="Congratulations! You have successfully signed up for FlowrSpot!"
          onActionClick={handleRegisterFlow}
          onClose={handleModalClose}
        />
      )}
    </>
  )
}
