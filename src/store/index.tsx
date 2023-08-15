import React, { ReactNode, createContext, useReducer } from 'react'
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  UPDATE_MODAL_STATE,
} from './actionTypes'
import { User } from 'helpers/types'

type State = {
  user: User | null
  activeModal: string
}

const initialState = {
  user: null,
  activeModal: null,
  auth: {
    token: localStorage.getItem('auth_token'),
    isAuthenticated: false,
  },
}

type Action = {
  type: string
  payload?: any
}

const store = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined)
const { Provider } = store

const StateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer((state: State, action: Action) => {
    switch (action.type) {
      case UPDATE_MODAL_STATE:
        return {
          ...state,
          activeModal: action?.payload,
        }

      case LOGIN_SUCCESS:
        localStorage.setItem('auth_token', action.payload)
        return {
          ...state,
          auth: {
            token: action.payload,
            isAuthenticated: true,
          },
        }
      case LOGOUT_SUCCESS:
        localStorage.clear()
        return {
          ...state,
          auth: {
            token: null,
            isAuthenticated: false,
          },
        }
      default:
        return state
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { StateProvider, store }
