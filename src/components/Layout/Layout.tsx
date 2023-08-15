import React, { useContext, useEffect, useState } from 'react'
import { Header } from 'components/Header/Header'
import { Homepage } from 'views/HomePage'
import { store } from 'store'
import modalAction from 'store/actions/modalAction'
import { ActiveModal, User } from 'helpers/types'
import { LoginModal } from 'components/Login/LoginModal'
import { RegisterModal } from 'components/Register/RegisterModal'
import { SuccessModal } from 'components/SuccessModal'
import { ProfileModal } from 'components/Profile/ProfileModal'
import { getUserDetails } from 'services/userService'
import loginAction from 'store/actions/loginAction'

interface AppState {
  user: User
  activeModal: string
  auth: {
    token: string
  }
}

type responseData = {
  user: User
}

export const Layout: React.FC = () => {
  const context = useContext(store)
  const dispatch = context?.dispatch
  const state = context?.state as AppState
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchUser = async () => {
      await getUserDetails()
        .then((data: responseData) => {
          setUser(data?.user)
        })
        .catch((e) => {
          setError(e?.response?.data?.error)
        })
    }
    if (state?.auth?.token) fetchUser()
  }, [state])

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

  const handleLoginFlow = (authToken: string) => {
    dispatch(modalAction(null))
    dispatch(loginAction(authToken))
    dispatch(modalAction(ActiveModal.LOGIN_SUCCESS))
  }

  const handleLoginSuccess = (isProfile: boolean) => {
    dispatch(modalAction(null))
    if (isProfile) dispatch(modalAction(ActiveModal.PROFILE))
  }

  return (
    <>
      <div className='flex flex-col'>
        <Header user={user} />
        <Homepage />
      </div>

      {/* Login & Registration modals */}
      {state?.activeModal === ActiveModal.LOGIN && (
        <LoginModal
          isOpen
          onClose={handleModalClose}
          handleLoginSuccess={handleLoginFlow}
        />
      )}
      {state?.activeModal === ActiveModal.REGISTER && (
        <RegisterModal
          isOpen
          onClose={handleModalClose}
          handleRegisterSuccess={handleRegisterSuccess}
        />
      )}
      {state?.activeModal === ActiveModal.PROFILE && (
        <ProfileModal
          isOpen
          onClose={handleModalClose}
          user={user}
          error={error}
        />
      )}

      {/* success modals */}
      {state?.activeModal === ActiveModal.REGISTER_SUCCESS && (
        <SuccessModal
          isOpen
          content='Congratulations! You have successfully signed up for FlowrSpot!'
          onActionClick={handleRegisterFlow}
          onClose={handleModalClose}
        />
      )}
      {state?.activeModal === ActiveModal.LOGIN_SUCCESS && (
        <SuccessModal
          isOpen
          content='“Congratulations! You have successfully logged into FlowrSpot!'
          onActionClick={() => handleLoginSuccess(false)}
          onClose={handleModalClose}
          onProfileClick={() => handleLoginSuccess(true)}
          hasProfileButton
          className='flex justify-between gap-4'
        />
      )}
    </>
  )
}
