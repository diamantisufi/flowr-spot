const loginAction = (payload: string | null) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload,
  }
}

export default loginAction
