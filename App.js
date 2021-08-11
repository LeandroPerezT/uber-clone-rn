import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './store.js'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen.js'
import MapScreen from './screens/MapScreen.js'


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
             
            <Stack.Screen 
              name='HomeScreen'
            component={HomeScreen}
            options={{
                headerShown: false
              }}/> 
            <Stack.Screen
            name='MapScreen'
            component={MapScreen}
            options={{
                headerShown: false
              }}/>

          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
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
