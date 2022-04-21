
import axios from "axios"

axios.defaults.baseURL = 'http://3.88.111.71:5000/api/v1/'
axios.defaults.headers.common['x-api-key'] = 'CC137A193287D757BB3CA33TT5B18'

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
