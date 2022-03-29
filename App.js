import { StyleSheet, View } from 'react-native';
import React from 'react'
import Search from './Components/Search'

export default function App() {
  return (
    <View style={styles.container}>
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


