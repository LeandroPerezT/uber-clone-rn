import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import HomeScreen from './screens/HomeScreen.js'


export default function App() {


  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
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
