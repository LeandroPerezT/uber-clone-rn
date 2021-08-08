import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={}>
    <View style={styles.container}>
      <Text>Hola mamita, soy Leandro, el mas capo</Text>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// in RN, flexbox defaults to a column
