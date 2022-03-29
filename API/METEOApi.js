// API/TMDBApi.js
import axios from 'axios'
import { API_TOKEN } from '@env'

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
async function slowNetwork() {
  await sleep(500)
}

const getFilmsFromApiWithSearchedText = async (text) => {
  await slowNetwork()
  const url =
    'http://api.meteo-concept.com/api/ephemeride/0?token=' +
    API_TOKEN 
    const response = await axios.get(url)
    console.log('--getFilmsFromApiWithSearchedText--')
    console.log(url)
    console.log(response.data)
    console.log('--fin getFilmsFromApiWithSearchedText--')
    return response.data
  }
// API/TMDBApi.js
const getImageFromApi = (name) => {
  if (name === null || name === undefined)
    return require('../Assets/filmVide.jpg')
  // 'https://image.tmdb.org/t/p/original' + name
  // 'https://image.tmdb.org/t/p/w300' + name
  return { uri: 'https://image.tmdb.org/t/p/w300' + name }
}

  
  export { getFilmsFromApiWithSearchedText, getImageFromApi }