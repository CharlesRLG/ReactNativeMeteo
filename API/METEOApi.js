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
  let url =
    'https://api.meteo-concept.com/api/location/cities?token=' +
    API_TOKEN +
    '&search=' +
    text
    let response = await axios.get(url)
    console.log('--getCityFromApiWithSearchedText--')
    console.log(url)
    console.log(response.data)

      if (response.data.cities.length>0) {
        url =
        'https://api.meteo-concept.com/api/ephemeride/1?token=' +
        API_TOKEN +
        '&insee=' +
        (response.data.cities[0].insee)
        let response2 = await axios.get(url)
        console.log(url)
        console.log(response2.data)

        //   if (response2.data.cities.length>0) {
        //   url =
        //   'http://api.meteo-concept.com/api/forecast/daily?token=' +
        //   API_TOKEN +
        //   '&insee=' +
        //   (response2.data.cities[0].insee)
        //   let response3 = await axios.get(url)
        //   console.log(url)
        //   console.log(response3.data)
        //   console.log('--fin getCityFromApiWithSearchedText--')
        //   return response3.data
        // }
  
        console.log('--fin getCityFromApiWithSearchedText--')
        return response2.data
      }

      
  }
  
  export { getCityFromApiWithSearchedText }