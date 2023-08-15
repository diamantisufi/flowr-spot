import { useContext } from 'react'
import { store } from 'store'
import { User } from './types'

export const authHeader = () => {
  let token = localStorage.getItem('auth_token')

  if (token !== null) {
    return { Authorization: 'Bearer ' + token }
  } else {
    return {}
  }
}

interface AppState {
  user: User
  activeModal: string
  auth: {
    token: string
  }
}

export const IsAuthenticated = () => {
  // token exp was not required

  const context = useContext(store)
  const state = context?.state as AppState
  const isAuthenticated = !!state?.auth?.token

  return isAuthenticated
}
