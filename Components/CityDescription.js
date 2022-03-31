// Components/FilmItem.js
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
// import 'react-json-pretty/themes/adventure_time.css'
// import JSONPretty from 'react-json-pretty'


class CityDescription extends React.Component {
  render() {
    const city = this.props.city
    const ephemeride = this.props.ephemeride
    // const forecast = this.props.forecast
    console.log(this.props.city.name)
    return (
      <View>
        <View>
          {/* <JSONPretty data={film}></JSONPretty> */}
        </View>
        <View style={styles.film_main_container}>
        {/* <Image style={styles.image} source={getInfoCityFromApi(film.poster_path)} /> */}
        
          <View>
            <View>
              <Text>Ville: {city.name}</Text>
              <Text>Code Postale: {city.cp}</Text>
              <Text>Latitude: {city.latitude}</Text>
              <Text>Longitude :{city.longitude}</Text>
              <Text>Altitude :{city.altitude}</Text>
            </View>
            <View>
              <Text>Jour: {ephemeride.day}</Text>
              <Text>Jour: {ephemeride.datetime}</Text>
              <Text>Durée de la journée: {ephemeride.duration_day}</Text>
              <Text>Levée de soleil: {ephemeride.sunrise}</Text>
              <Text>Couché de soleil: {ephemeride.sunset}</Text>
              <Text>Phase de la lune: {ephemeride.moon_phase}</Text>
            </View>
            {/* <View>
              <Text>Température minimale: {forecast.tmin}</Text>
              <Text>Température Maxmale: {forecast.tmax}</Text>
              <Text>Probabilité de plui: {forecast.probarain}</Text>
              <Text>Phase de la lune: {forecast.moon_phase}</Text>
            </View> */}
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  film_main_container: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#FFFFF',
  },
  film_description: {
    flexDirection:'column',
    marginLeft: 20,
  }, 
  titreVote: {
    flexDirection: 'row',
    fontSize: 16,
  },
  titreFilm: {
    marginRight: 50,
    fontSize: 20,
    minWidth: 300,
    fontWeight: 'bold',
  },
  Vote_average_film: {
    fontWeight: 'bold',
  },
  OverviewFilm: {
    marginTop: 20,
    marginBottom: 20,
    maxWidth: 350,
    minHeight: 100,
  },
  release_date_film: {
    fontSize: 16,
    marginLeft: 250,
    fontWeight: 'bold',
  },
  image: {
        width: 200,
        height: 300,
        flexDirection:'column',
    }
    
})
export default CityDescription