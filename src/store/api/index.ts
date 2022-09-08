import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_PUBLIC_URL_BASE
axios.defaults.headers.common['x-api-key'] =
  import.meta.env.VITE_PUBLIC_X_API_KEY

async function userSingIn({ username, password }: any): Promise<any> {
  const params = {
    username,
    password
  }

  const response = await axios.post('auth/singin', params)
  return response.data
}

async function refreshTokens({ refreshToken }: any): Promise<any> {
  const params = {
    refreshToken
  }

  const response = await axios.post('auth/refreshtoken', params)
  return response.data
}

async function userInfo(): Promise<any> {
  const response = await axios.get('users/info')
  return response.data
}

async function getGateway(): Promise<any> {
  const response = await axios.get('gateways')
  return response.data
}

export default {
  userSingIn,
  refreshTokens,
  userInfo,
  getGateway
}
