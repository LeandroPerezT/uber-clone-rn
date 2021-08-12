import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import  MapView from 'react-native-maps'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'

const Map = () =>{

  const origin = useSelector(selectOrigin)

  return(
  <MapView
    style={tw`flex-1`}
    mapType='mutedStandard'
    initialRegion={{
      latitude: origin.location.latitude,
      longitude: origin.location.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  />
  )
}

export default Map
