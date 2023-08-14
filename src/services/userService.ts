import axios from 'axios'
import { LoginRequestParams, RegisterRequestParams } from 'helpers/types'

const serverUrl = 'https://flowrspot-api.herokuapp.com/api/v1'

// const getDefaultHeaders = (accessToken) => {
//     let headers = { "Content-Type": "application/json" };
//     if (accessToken) {
//       headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return headers;
// };

export const registerUser = async (params: RegisterRequestParams) => {
  const response = await axios.post(`${serverUrl}/users/register`, params)
  return response?.data
}

export const loginUser = async (params: LoginRequestParams) => {
  const response = await axios.post(`${serverUrl}/users/login`, params)
  return response?.data || []
}