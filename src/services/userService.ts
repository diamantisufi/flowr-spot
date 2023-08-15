import axios from 'axios'
import { authHeader } from 'helpers/authHeader'
import { LoginRequestParams, RegisterRequestParams } from 'helpers/types'

const serverUrl = 'https://flowrspot-api.herokuapp.com/api/v1'

export const registerUser = async (params: RegisterRequestParams) => {
  const response = await axios.post(`${serverUrl}/users/register`, params)
  return response?.data
}

export const loginUser = async (params: LoginRequestParams) => {
  const response = await axios.post(`${serverUrl}/users/login`, params)
  return response?.data || []
}

export const getUserDetails = async () => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(),
  }

  console.log({ requestOptions })
  const response = await axios.get(`${serverUrl}/users/me`, requestOptions)
  return response?.data || []
}
