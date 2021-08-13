import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_API_KEY} from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from "../slices/navSlice.js"

const HomeScreen = () =>{

  const dispatch = useDispatch()

  return(
    <SafeAreaView style={ tw`bg-white h-full` }>
      <View style={tw`p-5`}>
        <Image style={{
          width: 100,
          height: 100,
          resizeMode: 'contain'
        }}
        source={{
            uri: 'https://links.papareact.com/gzs'
          }}
          />

          <GooglePlacesAutocomplete
            styles={{
              container:{
                flex: 0,
            },
              textInput: {
                fontSize: 18
            }
          }}
            nearbyPlacesApi='GooglePlacesSearch'
            debounce={400}
            returnKeyTyoe={'search'}
            placeholder='Dónde estas?'
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'en', 
          }}
            enablePoweredByContainer={false}
            fetchDetails={true}
            onPress={(data, details)=>{
              dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            })),
            dispatch(setDestination(null))
            }}
            minLength={3}
          />

        <NavOptions/>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen


