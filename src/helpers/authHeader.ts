export const authHeader = () => {
  let token = localStorage.getItem('auth_token')

  if (token !== null) {
    return { Authorization: 'Bearer ' + token }
  } else {
    return {}
  }
}
