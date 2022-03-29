// API/TMDBApi.js
import axios from 'axios'
import { API_TOKEN } from '@env'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function slowNetwork() {
  await sleep(500)
}

const getCityFromApiWithSearchedText = async (text) => {
  await slowNetwork()
  const url =
    'http://api.meteo-concept.com/api/location/cities?token=' +
    API_TOKEN + search
    const response = await axios.get(url)
    console.log('--getCityFromApiWithSearchedText--')
    console.log(url)
    console.log(response.data)
    console.log('--fin getCityFromApiWithSearchedText--')
    return response.data
  }
  
  export { getCityFromApiWithSearchedText }