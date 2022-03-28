// Components/Search.js
import React from 'react'
import { View, TextInput, Button } from 'react-native'


class Search extends React.Component {
    
            render() {

                return (
                    <View>
                        <TextInput placeholder='Choisir une ville' />
                        <Button title='Afficher la météo' onPress={() => { }} />
                    </View>
            )
        }
    }

export default Search