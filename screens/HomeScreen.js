import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, Image} from 'react-native'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'


const HomeScreen = () =>{
  return(
    <SafeAreaView style={ [styles.container, tw`bg-white h-full`] }>
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

        <NavOptions/>

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
})
