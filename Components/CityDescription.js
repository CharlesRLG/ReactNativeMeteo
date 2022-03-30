// Components/FilmItem.js
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import dayjs from 'dayjs'
// import 'react-json-pretty/themes/adventure_time.css'
// import JSONPretty from 'react-json-pretty'
import { getLatitudeEtLongitude } from '../API/METEOApi'

class CityDescription extends React.Component {
  render() {
    const city = this.props.city
    console.log(this.props.city.name)
    return (
      <View>
        <View>
          {/* <JSONPretty data={film}></JSONPretty> */}
        </View>
        <View style={styles.film_main_container} source={getLatitudeEtLongitude}>
        {/* <Image style={styles.image} source={getInfoCityFromApi(film.poster_path)} /> */}

          <View style={styles.film_description}>
            <View>
              <Text>{city.name}</Text>
              <Text>{city.cp}</Text>
              <Text>{city.latitude}</Text>
              <Text>{city.longitude}</Text>
              <Text>{city.altitude}</Text>
            </View>
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