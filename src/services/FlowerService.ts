import axios from 'axios'

const serverUrl = process.env.REACT_APP_API_URL

export const fetchFlowers = async () => {
  const response = await axios.get(`${serverUrl}/flowers`)
  return response?.data || []
}
