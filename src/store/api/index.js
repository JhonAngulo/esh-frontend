
import axios from "axios"

axios.defaults.baseURL = process.env.NEXT_PUBLIC_URL_BASE
axios.defaults.headers.common['x-api-key'] = process.env.NEXT_PUBLIC_X_API_KEY


async function userSingIn ({ username, password }) {
  const params = {
    username,
    password
  }
  
  const response = await axios.post('auth/singin', params)
  return response.data
}

async function userInfo () {
  const response = await axios.get('users/info')
  return response.data
}

async function getGateway () {
  const response = await axios.get('gateways')
  return response.data
}

export default {
  userSingIn,
  userInfo,
  getGateway
}
