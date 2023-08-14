import { UPDATE_MODAL_STATE } from 'store/actionTypes'

const modalAction = (payload: string | null) => {
  return {
    type: UPDATE_MODAL_STATE,
    payload,
  }
}

export default modalAction
