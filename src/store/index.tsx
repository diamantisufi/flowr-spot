import React, { ReactNode, createContext, useReducer } from 'react'
import { UPDATE_MODAL_STATE } from './actionTypes'

type State = {
  user: any
  activeModal: string
}

const initialState = {
  user: null,
  authToken: localStorage.getItem('auth_token') || '',
  activeModal: null,
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
      default:
        return state
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { StateProvider, store }
