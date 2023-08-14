import axios from 'axios'

const serverUrl = 'https://flowrspot-api.herokuapp.com/api/v1'

// const getDefaultHeaders = (accessToken) => {
//     let headers = { "Content-Type": "application/json" };
//     if (accessToken) {
//       headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return headers;
// };

export const fetchFlowers = async () => {
  const response = await axios.get(`${serverUrl}/flowers`)
  return response?.data || []
}
