import axios from 'axios'

const serverUrl = 'https://flowrspot-api.herokuapp.com/api/v1'

export const fetchFlowers = async () => {
  const response = await axios.get(`${serverUrl}/flowers`)
  return response?.data || []
}
