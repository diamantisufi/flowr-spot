export const ActiveModal = {
  LOGIN: 'login',
  LOGIN_SUCCESS: 'login_success',
  REGISTER: 'register',
  REGISTER_SUCCESS: 'register_success',
  PROFILE: 'profile',
  SETTINGS: 'settings',
}

export type FlowerListResponseData = {
  id: string
  name: string
  latin_name: string
  profile_picture: string
  favorite: boolean
  sightings: number
}

export type LoginRequestParams = {
  email: string
  password: string
}

export type RegisterRequestParams = {
  first_name: string
  last_name: string
  email: string
  password: string
  date_of_birth: string
}

export type RegisterResponseData = {
  auth_token: string
  error?: string
}

export type LoginResponseData = {
  auth_token: string
  error?: string
}
