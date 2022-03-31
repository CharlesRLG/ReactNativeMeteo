// API/TMDBApi.js
import axios from 'axios'
import { API_TOKEN } from '@env'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function slowNetwork() {
  await sleep(50)
}

const getCityFromApiWithSearchedText = async (text) => {
  await slowNetwork()
  const url =
    'https://api.meteo-concept.com/api/location/cities?token=' +
    API_TOKEN +
    '&search=' +
    text
    const response = await axios.get(url)
    console.log('--getCityFromApiWithSearchedText--')
    console.log(url)
    console.log(response.data)
    console.log('--fin getCityFromApiWithSearchedText--')
    return response.data
  }

  const getLatitudeEtLongitude = (name) => {
    if (name === null || name === undefined)
    return { uri: name }
  }
  
  export { getCityFromApiWithSearchedText, getLatitudeEtLongitude }