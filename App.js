import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store.js'
import HomeScreen from './screens/HomeScreen.js'

export default function App() {


  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 240,
  },
  font: {
    fontSize: 30,
    color: 'black',
    paddingLeft: 40,
    marginBottom: 20
  }
});

// in RN, flexbox defaults to a column
