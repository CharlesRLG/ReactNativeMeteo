// Components/FilmItem.js
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// import 'react-json-pretty/themes/adventure_time.css'
// import JSONPretty from 'react-json-pretty'


class CityDescription extends React.Component {
  render() {
    const city = this.props.city
    const ephemeride = this.props.ephemeride
    const forecast = this.props.forecast
    console.log(this.props.city.name)
    return (
      <View>
        <View>
          {/* <JSONPretty data={film}></JSONPretty> */}
        </View>
        <View style={styles.informationVilleEtTemp}>
        {/* <Image style={styles.image} source={getInfoCityFromApi(film.poster_path)} /> */}
        
          <View>

            <View>
              <Text><h2>Ville et Coordonnées:</h2></Text>
            </View>

            <View style={styles.coordoVille}>
              <Text>Ville: {city.name}</Text>
              <Text>Code Postale: {city.cp}</Text>
              <Text><br></br></Text>
              <Text>Latitude: {city.latitude}</Text>
              <Text>Longitude :{city.longitude}</Text>
              <Text><br></br></Text>
              <Text>Altitude :{city.altitude}</Text>
            </View>

            <View>
              <Text><h2>Durée de la journée:</h2></Text>
            </View>

            <View style={styles.horaireLeveEtCouche}>
              <Text>Durée de la journée: {ephemeride.duration_day}</Text>
              <Text><br></br></Text>
              <Text>Levée de soleil: {ephemeride.sunrise}</Text>
              <Text>Couché de soleil: {ephemeride.sunset}</Text>
              <Text><br></br></Text>
              <Text>Phase de la lune: {ephemeride.moon_phase}</Text>
            </View>

            <View>
              <Text><h2>Température, pluis et vent:</h2></Text>
            </View>

            <View style={styles.temperaturePluisVent}>
              <Text>Température minimale: {forecast.tmin} °</Text>
              <Text>Température Maxmale: {forecast.tmax} °</Text>
              <Text><br></br></Text>
              <Text>Probabilité de pluis: {forecast.probarain} %</Text>
              <Text>Probabilité de gel: {forecast.probafrost} %</Text>
              <Text>Probabilité de brouillard: {forecast.probafog} %</Text>
              <Text><br></br></Text>
              <Text>Moyenne des vents: {forecast.wind10m} km/h</Text>
              <Text>rafales de vent: {forecast.gust10m} km/h</Text>
              <Text>Probabilité de vent supérieur 70 km/h: {forecast.probawind70} %</Text>
              <Text>Direction du vent: {forecast.dirwind10m} °</Text>
              
            </View>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  informationVilleEtTemp: {
    display: 'flex',
    margin: 20,
    backgroundColor: '#FFFFF',
  },
  coordoVille: {
   flex: 1,
   borderWidth: 1,
   backgroundColor: '#D6EDFC',
   paddingTop:'5px',
   paddingBottom: '5px',
   paddingRight: '5px',
   paddingLeft: '5px',
  },
  horaireLeveEtCouche: {
    display: 'flex',
    margin: 20,
    backgroundColor: '#FFFFF',
  },
  temperaturePluisVent: {
    display: 'flex',
    margin: 20,
    backgroundColor: '#FFFFF',
  }
})
export default CityDescription