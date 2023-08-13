import { UPDATE_MODAL_STATE } from 'store/actionTypes'

const modalAction = (payload: any) => {
  return {
    type: UPDATE_MODAL_STATE,
    payload,
  }
}

export default modalAction
